import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';

// Authoring check: run before publishing content changes. No dependencies.
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const source=path.resolve(process.argv[2]||path.join(root,'dist','content.js'));
const context={window:{}};
try{vm.runInNewContext(fs.readFileSync(source,'utf8'),context,{timeout:1000,filename:source});}
catch(error){console.error('Content file could not be read: '+error.message);process.exit(1);}
const data=context.window.portfolioContent;
const errors=[];
const fail=message=>errors.push(message);
const object=value=>value&&typeof value==='object'&&!Array.isArray(value);
const required=(value,label)=>{if(typeof value!=='string'||!value.trim())fail(label+' must contain text.');};
const isoDate=(value,label)=>{
  const parsed=typeof value==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(value)?new Date(value+'T00:00:00Z'):null;
  if(!parsed||Number.isNaN(parsed.getTime())||parsed.toISOString().slice(0,10)!==value)fail(label+' must be a real date in YYYY-MM-DD format.');
};
const url=(value,label)=>{
  if(value==null||value==='')return;
  try{const parsed=new URL(value);if(parsed.protocol!=='https:'||parsed.username||parsed.password)throw new Error();}
  catch{fail(label+' must be an HTTPS URL, blank or null.');}
};
if(!object(data)){console.error('Expected window.portfolioContent to be an object.');process.exit(1);}
isoDate(data.updatedOn,'updatedOn');
if(!object(data.profile))fail('profile must be an object.');
else{
  required(data.profile.name,'profile.name');
  for(const field of ['githubUrl','linkedinUrl'])url(data.profile[field],'profile.'+field);
  if(data.profile.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.profile.email))fail('profile.email must be an email address.');
  if(data.profile.phone&&!/^\+?[\d ()-]+$/.test(data.profile.phone))fail('profile.phone must be a phone number.');
  if(data.profile.timeZone){try{new Intl.DateTimeFormat('en',{timeZone:data.profile.timeZone});}catch{fail('profile.timeZone must be a valid IANA time zone.');}}
  required(data.profile.portrait,'profile.portrait');
  if(typeof data.profile.portrait==='string'){
    const asset=path.resolve(root,'dist',data.profile.portrait);
    const relative=path.relative(path.join(root,'dist'),asset);
    if(relative.startsWith('..')||path.isAbsolute(relative)||!fs.existsSync(asset)||!fs.statSync(asset).isFile())fail('profile.portrait must point to an existing local image inside dist.');
  }
}
if(data.github&&object(data.github)){
  for(const field of ['publicRepositories','followers'])if(!Number.isInteger(data.github[field])||data.github[field]<0)fail('github.'+field+' must be a non-negative integer.');
}
const collections=['projects','hackathons','experience','certifications','repositories'];
for(const field of collections)if(data[field]!==undefined&&!Array.isArray(data[field]))fail(field+' must be an array; use [] when empty.');
const entries=field=>Array.isArray(data[field])?data[field]:[];
const ids=new Set();
const covers=new Set(['cover-grid','cover-orbits','cover-bars','cover-disc','cover-signal','cover-stack']);
for(const collection of ['projects','hackathons','experience','certifications']){
  entries(collection).forEach((entry,index)=>{
    const label=collection+'['+index+']';
    if(!object(entry)){fail(label+' must be an object.');return;}
    required(entry.title,label+'.title');
    if(typeof entry.id!=='string'||!/^[a-z][a-z0-9-]*$/.test(entry.id))fail(label+'.id must be a lowercase slug, such as my-project.');
    else if(ids.has(entry.id)||['projects','certifications'].includes(entry.id))fail(label+'.id is duplicate or reserved: '+entry.id);
    else ids.add(entry.id);
    if(entry.technologies!==undefined&&(!Array.isArray(entry.technologies)||entry.technologies.some(value=>typeof value!=='string')))fail(label+'.technologies must be an array of strings.');
    if(entry.cover&&!covers.has(entry.cover))fail(label+'.cover is not a supported cover style.');
    for(const field of ['sourceUrl','liveUrl','url'])url(entry[field],label+'.'+field);
  });
}
const hackathonIds=new Set(entries('hackathons').filter(object).map(entry=>entry.id));
entries('projects').filter(object).forEach((entry,index)=>{
  if(entry.hackathonId&&!hackathonIds.has(entry.hackathonId))fail('projects['+index+'].hackathonId does not match a hackathon.');
});
entries('repositories').forEach((entry,index)=>{
  const label='repositories['+index+']';
  if(!object(entry)){fail(label+' must be an object.');return;}
  required(entry.name,label+'.name');url(entry.url,label+'.url');isoDate(entry.updated,label+'.updated');
});
if(errors.length){console.error('Fix these content issues:\n'+errors.map(error=>' - '+error).join('\n'));process.exit(1);}
console.log('Content valid: '+collections.map(field=>entries(field).length+' '+field).join(', ')+'.');
