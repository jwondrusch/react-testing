import faker from "faker";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const generateTodo = (overrides?: Partial<Todo>): Todo => {
  const generated = {
    id: faker.random.number(),
    text: faker.lorem.sentence(),
    completed: faker.random.boolean()
  };

  if (!!overrides) {
    return { ...generated, ...overrides };
  }

  return generated;
};

export const generateTodos = (count: number): Array<Todo> => {
  const output: Array<Todo> = [];

  for (let i = 0; i < 10; i++) {
    output.push(generateTodo({ id: i }));
  }

  return output;
};
