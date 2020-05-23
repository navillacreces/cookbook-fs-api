BEGIN;

INSERT INTO recipes (name, cooktime, servings , instructions , ingredients)

VALUES
('Sauteed Mushrooms','0:45','4','Heat olive oil and butter in a large saucepan over medium heat. Cook and stir mushrooms, garlic, cooking wine,
teriyaki sauce, garlic salt, and black pepper in the hot oil and butter until mushrooms are lightly browned, about 5 minutes.
Reduce heat to low and simmer until mushrooms are tender, 5 to 8 more minutes.','3 tablespoons of olive oil, 3 tablespoons of butter, 1 pound of mushrooms, 1 clove of garlic
1 tablespoon of red cooking wine, fresh pepper, teriyaki sauce, and garlic salt'),
(
'Pumpkin Fluff Dip','0:05','32','In a large bowl, mix together instant vanilla pudding mix, pumpkin and pumpkin pie spice. Fold in the thawed frozen whipped topping. Chill in the refrigerator until serving.',
'1 container of frozen whipped topping, 1 package of instant vanilla pudding mix, 1 can of soild pack pumpkin, 1 teaspoon of pumpkin pie spice'
),
('Rosemary Potatoes','0:40','4','Preheat oven to 375 degrees then mix together butter and oil to pour into a 9x13 inch dish. Place the potatoes into
the dish and stir until coated. Then sprinkle with rosemary, salt, and pepper. Cover with aluminum foil.Bake in the preheated oven for 30 minutes, or until the potatoes are tender.
Stir the potatoes occasionally to ensure even cooking.',
'6 Red Potatoes, 3 tablespoons of butter, 3 tablespoons of vegetable oil, 1 tablespoon of fresh rosemary, salt and pepper'
),
('Apple Sauce','0:30','4','In a saucepan, combine apples, water, sugar, and cinnamon.
Cover, and cook over medium heat for 15 to 20 minutes, or until
apples are soft. Allow to cool, then mash with a fork or potato
masher.',
'4 Apples, 3/4 cup of water, 1/2 teaspoon of ground cinnamon'),
('Lime Cilantro Rice','0:30','4','Bring water to a boil then stir rice and butter into the water. Cover and reduce heat to low,
and simmer until the rice is tender, about 25 minutes. Stir the lime zest, lime juice, and cilantro into the cooked
rice just before serving',
'1/2 cup of chopped cilantro, 2 tablespoons of fresh lime juice, 1 teaspoon of lime zest, 1 cup of white rice, 1 tablespoon of butter
2 cups of water');

COMMIT;


