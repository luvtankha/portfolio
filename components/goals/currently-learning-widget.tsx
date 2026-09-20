const activeLearning = [
  { label: "Java + DSA", milestones: 7 },
  { label: "Full-Stack Development", milestones: 6 },
] as const;

function MilestoneBar({ value }: { value: number }) {
  return (
    <div
      className="learning-milestone-bar"
      role="progressbar"
      aria-label={`${value} of 10 roadmap milestones in progress`}
      aria-valuemin={0}
      aria-valuemax={10}
      aria-valuenow={value}
    >
      {Array.from({ length: 10 }, (_, index) => <i key={index} className={index < value ? "complete" : ""} />)}
    </div>
  );
}

export function CurrentlyLearningWidget() {
  return (
    <section className="currently-learning-widget" aria-label="Currently learning">
      <div className="widget-titlebar"><span>CURRENTLY LEARNING</span><i /></div>
      <div className="widget-body">
        {activeLearning.map(item => (
          <div className="learning-item" key={item.label}>
            <strong>{item.label}</strong>
            <MilestoneBar value={item.milestones} />
          </div>
        ))}
        <div className="learning-next"><small>NEXT</small><strong>AI Engineering</strong></div>
      </div>
      <p>Roadmap checkpoints · not skill ratings</p>
    </section>
  );
}
