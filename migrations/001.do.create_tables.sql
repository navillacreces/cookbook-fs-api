CREATE TABLE recipes(

      id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
      name TEXT NOT NULL,
      cooktime TEXT NOT NULL,
      servings TEXT NOT NULL,
      ingredients TEXT NOT NULL,
      instructions TEXT NOT NULL
);