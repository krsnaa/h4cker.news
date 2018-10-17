export type story = {
  by: string,
  descendants: number,
  id: number,
  kids: Array<number>,
  score: number,
  time: DateTime,
  title: string,
  type: "job" | "story" | "comment" | "poll" | "pollopt",
  url: string
};
