export interface Trial {
  id: string;
  shortDescription: string;
  longDescription: string;
  product: string;
  formulation: string;
  creationDate: string | Date;
  startDate?: string | Date;
}

export const trials: Trial[] = [
  {
    id: "abcd",
    shortDescription: "My trial",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum arcu tortor, sed fermentum dolor ornare a. Donec tincidunt finibus arcu non feugiat. Nunc at dignissim orci, id luctus nisl. Sed sollicitudin nulla quis ex scelerisque convallis. Fusce varius lectus lorem, faucibus commodo nisl eleifend id. Proin non rhoncus lorem.",
    product: "dupilumab",
    formulation: "injectable 200mg",
    creationDate: "27-08-10",
    startDate: "28-08-10",
  },
  {
    id: "vfqwef",
    shortDescription: "My trial",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum arcu tortor, sed fermentum dolor ornare a. Donec tincidunt finibus arcu non feugiat. Nunc at dignissim orci, id luctus nisl. Sed sollicitudin nulla quis ex scelerisque convallis. Fusce varius lectus lorem, faucibus commodo nisl eleifend id. Proin non rhoncus lorem.",
    product: "dupilumab",
    formulation: "injectable 200mg",
    creationDate: "27-08-10",
    startDate: "28-08-10",
  },
  {
    id: "abvqwegcd",
    shortDescription: "My trial",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum arcu tortor, sed fermentum dolor ornare a. Donec tincidunt finibus arcu non feugiat. Nunc at dignissim orci, id luctus nisl. Sed sollicitudin nulla quis ex scelerisque convallis. Fusce varius lectus lorem, faucibus commodo nisl eleifend id. Proin non rhoncus lorem.",
    product: "dupilumab",
    formulation: "injectable 200mg",
    creationDate: "27-08-10",
    startDate: "28-08-10",
  },
];

export const addTrial = (trial: Trial): void => {
  trials.push(trial);
};
