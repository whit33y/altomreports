export type UserTable = {
  id: string;
  name: string;
  second_name: string;
  email: string;
  password: string;
  image: string;
};

export type ReportsTable = {
  id: string;
  topic: string;
  hd_number: string;
  create_date: string;
  category: string;
  text: string;
  user_id: string;
  status: "solved" | "unsolved";
  images: string;
};

export type CategoriesTable = {
  name: string;
};

export type BugsTable = {
  id: string;
  topic: string;
  text: string;
  create_date: string;
  images: string;
  userId: string;
};
