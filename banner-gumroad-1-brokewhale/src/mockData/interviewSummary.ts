export interface InterviewSummary {
  id: number,
  title: string;
  team: string;
  headcount: number;
  total: number;
  inProgress: number;
  completed: number;
  hired: number;
}

export const fetchInterviewSummaries = () => new Promise<InterviewSummary[]>((res) => res([{
  id: 1,
  title: 'Fullstack Software Engineer',
  team: 'Fleet App Team',
  headcount: 1,
  total: 9,
  inProgress: 3,
  completed: 1,
  hired: 1
}, {
  id: 2,
  title: 'Backend Software Engineer',
  team: 'Fleet App Team',
  headcount: 1,
  total: 12,
  inProgress: 7,
  completed: 1,
  hired: 0
}, {
  id: 3,
  title: 'Frontend Software Engineer',
  team: 'Fleet App Team',
  headcount: 1,
  total: 3,
  inProgress: 3,
  completed: 2,
  hired: 0
}]));
