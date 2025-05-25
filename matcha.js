// Hamburger Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navList.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navList.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerOffset = document.querySelector('header').offsetHeight; // Account for sticky header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20; // Add some padding

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        alert(`Thank you, ${name}! We have received your message and will get back to you shortly.\n\nSubject: ${subject}\nEmail: ${email}\nMessage: "${message}"`);

        contactForm.reset();
    });
}

// Product Details Popups
const productDetails = {
    'ceremonial': {
        title: 'Ceremonial Matcha',
        description: 'The best matcha powder for a smooth, sweet and savory dessert or drink',
        notes: 'It is perfect to drink on its own. Ideal for Usucha (thin tea) and Koicha (thick tea).'
    },
    'premium-culinary': {
        title: 'Premium Matcha',
        description: 'The premium matcha is perfect for blending. Its strong, vibrant flavor and color stands up beautifully against milk, sweeteners, and other ingredients',
        notes: 'Excellent for baking, and any recipe where matcha is the main ingredient for the recipe.'
    },
    'culinary': {
        title: 'Culinary Grade Matcha',
        description: 'A budget friendly option for all your culinary adventure when making matcha desserts or drinks.',
        notes: 'It is the most recommended type of matcha for baking and cooking.',
    }
};

const productCards = document.querySelectorAll('.product-card');
const productPopupOverlay = document.getElementById('product-popup-overlay');
const productPopupTitle = document.getElementById('popup-title');
const productPopupDescription = document.getElementById('popup-description');
const productPopupNotes = document.getElementById('popup-notes');

productCards.forEach(card => {
    card.querySelector('.view-details-btn').addEventListener('click', function() {
        const grade = this.dataset.target.replace('-popup', '');
        const details = productDetails[grade];

        productPopupTitle.textContent = details.title;
        productPopupDescription.textContent = details.description;
        productPopupNotes.textContent = details.notes;
        productPopupOverlay.classList.add('active');
    });
});

// Event listener for the "Done" button in product popup
productPopupOverlay.querySelectorAll('.popup-done-button').forEach(button => {
    button.addEventListener('click', () => {
        productPopupOverlay.classList.remove('active');
    });
});
// Event listener for the 'x' close button in product popup
productPopupOverlay.querySelectorAll('.close-popup').forEach(button => {
    button.addEventListener('click', () => {
        productPopupOverlay.classList.remove('active');
    });
});


// Recipe Details Popups
const recipeDetails = {
    'matcha-latte': {
        title: 'Classic Matcha Latte',
        description: 'A creamy and comforing drink in a glass that has combination of milk and matcha.',
        ingredients: '<strong>Ingredients:</strong><br>- 2 tsp YOOMATCHA Culinary Grade Matcha<br>- 1 to 2 tbsp of hot water<br>- 1/2 cup unsweetened milk <br>- 1/2 cup ice cubes<br>-Honey or maple syrup to taste',
        instructions: '<strong>Instructions:</strong><br>1.In a bowl, add the matcha powder and the 1 to 2 tbsp of hot water then whisk it until the it has been incorporated all together.<br> 2. Add milk and ice cube to the glass.<br>3. Pour the matcha into the glass.<br>4. Add sweetener of your choice.'

    },
    'matcha-smoothie': {
        title: 'Banana Matcha Smoothie',
        description: 'A healthy and refreshing boost drink to start your day.Perfect for a quick healthy breakfast',
        ingredients: '<strong>Ingredients:</strong><br>-1 tsp YOOMATCHA Culinary Grade Matcha<br>-1 ripe banana (frozen for creaminess)<br>-1/2 cup spinach (optional)<br>-1/2 cup unsweetened almond milk (or other milk)<br>- 1/2 cup ice cubes<br>- 1 tbsp chia seeds (optional)<br>- Honey or maple syrup to taste.<br>- 1/2 tsp vanilla extract',
        instructions: '<strong>Instructions:</strong><br>1. Combine and put all the ingredients in a blender.<br>2. Blend until the texture is smooth and creamy.<br>3. Pour into glass and put your desired topping on top.'
    },
    'matcha-cake': {
        title: 'Matcha Cake',
        description: 'A soft and fluffy type of cake mixed with a unique taste of matcha and sweetness',
        ingredients: '<strong>Ingredients:</strong><br>- 7 tablespoon of unsalted butter, softened<br>- 1 tbsp YOOMATCHA Culinary Matcha<br>- 1 cup granulated sugar<br>- 2 large eggs<br>- 1 cup of all purpose flour <br>- 1 tsp baking poweder<br>- 2 cups of powdered sugar, sifted<br>- 1 tsp vanilla extract<br>- 2 tbsp of heavy cream',
        instructions: '<strong>Instructions:</strong><br>1. Preheat oven to 325°F.<br>2. In a mediulm-sized bowl, mix the softened butter and sugar until light and fluffy. Next add the eggs, matcha powder and vanilla extract.<br>3.In a seperate bowl, add the flour and baking powder.Then add the buttermilk.Pour the batter in and put in in the oven.Combine the frosting ingredients.Then spread the frosting onto the cake.'
    },
    'matcha-cookies': {
        title: 'Matcha White Chocolate Cookies',
        description: 'Chewy and savory dessert that offers a distintive taste of sweetness and bitterness.',
        ingredients: '<strong>Ingredients:</strong><br>- 3/4 cup room temperature unsalted butter<br>- 1/2 cup light brown sugar<br>- 1/4 cup packed light brown sugar<br>- 1 tbsp cornstarch<br>- 1 tsp vanilla extract<br>- 1 3/4 cups all-purpose flour<br>- 2 tbsp YOOMATCHA Culinary Grade Matcha<br>- 1 tsp baking soda<br>- 1/2 tsp salt<br>- 1 cup white chocolate chips',
        instructions: '<strong>Instructions:</strong><br>1. Preheat oven to 325°F<br>2.In a small bowl, combine the dry ingredients.Put the butter and brown sugar.Then add the egg and vanilla extract.Add the dry ingredients to the wet batter and mix it well.Put the white chocolate on the dough.Scoop out the dough and put it in the pan.Pop it in the oven to bake for about 11 to 12 minutes.'
    },
    'matcha-cheesecake': {
        title: ' Matcha No-Bake Cheesecake',
        description: 'Creamy and Rich dessert that give a sophisticated intriguig flavor of matcha and white chocolate.',
        ingredients: '<strong>Ingredients:</strong><br>- For Base: 1 1/4 cups of Oreo cookies or graham crackers, 45 g of unsalted butter (melted)<br>- For Filling: , 500 g of cream cheese, 1 1/2 tsp vanilla extract, 1 1/3 cup of powdered icing sugar, 3 tbsp of YOOMATCHA Culinary Grade Matcha, 1 cup heavy cream',
        instructions: '<strong>Instructions:</strong><br>1. Place the oreo or graham crackers in a food processor and blend it until you get fine crumbs. Put the butter in the microwave then pour it into the crushed cookie.<br>3.In a bowl, mix the cream cheese, vanilla extract, then add the icing sugar and matcha powder. Mix until combined all together.<br>4. Fold the whipped cream into the cream cheeese mix until it is smooth.Pour the filling evenly in the pan, then cover it with a cling film and refrigerate it for atleast 3hrs or overnight until set. Dust some matcha powder on top when serving.'
    },
    'matcha-ice-cream': {
        title: 'Matcha Ice Cream',
        description: 'Refreshing, Creamy and cool dessert that catches the essence of matcha in each scoop.',
        ingredients: '<strong>Ingredients:</strong><br>- 2 cups heavy cream<br>- 1 cup whole milk<br>- 1/2 cup granulated sugar<br> 2 tbsp maple syrup<br>- 2 tbsp YOOMATCHA Culinary Matcha<br>- squeeze of lemon (optional)',
        instructions: '<strong>Instructions:</strong><br>1. If you are using an ice cream maker, make sure that it has been in the freezer for atleast 12 to 24 hours.<br>2.Combine the matcha powder,sugar, maple syrup, vanilla, lemon (optional) and salt. Then pour it in the ice cream maker and churn it according to the directions<br>3. Pour into a freezer-safe container and freeze it for atleast 1-2 hours to make it firm<br>4.Once your ice cream is frozen, put it in the bowl and Enjoy!.'
    },
    'matcha-chocolate': {
        title: 'Matcha Chocolate',
        description: 'An easy-to-make, sweet treat combining the sweetness of white chocolate with matcha.',
        ingredients: '<strong>Ingredients:</strong><br>- 14 oz white chocolate, chopped<br>- 4 tbsp YOOMATCHA Culinary Grade Matcha<br>- 1/2 cup heavy whipping cream<br>-2 tbsp of unsalted butter',
        instructions: '<strong>Instructions:</strong><br>1. Chop the white chocolate into small pieces.Then cut the unsalted butter<br>2.Add 1/2 cup heavy whipping cream into a small saucepan and bring it to a boil over medium heat.<br>3. Pour the white chocolate and butter to the whipping cream, then mix it all together<br>4. Once the mixture is smooth, put matcha into the mixture and stir until fully combined. Pour matcha chocolate batter onto the lined baking sheet and spread evenly.<br>6.Chill until firm .Remove the chocolate and cut into bite size then dust matcha on top.'
    },
     'matcha-tiramisu': {
        title: 'Matcha Tiramisu',
        description: 'A delightful fusion mix of Italian dessert and Japanese matcha, perfect for special occasions.',
        ingredients: '<strong>Ingredients:</strong><br>- 3 large egg yolks<br>- 2 tbsp YOOMATCHA Culinary Grade Matcha<br>- 225 g  mascarpone cheese, room temperature<br>- 70 g  granulated sugar<br>- 1 tsp vanilla extract<br>- 350 g heavy cream, cold<br>- 24-30 pieces of ladyfingers<br>- 120 g hot water',
        instructions: '<strong>Instructions:</strong><br>1. Boil 1 liter of water. In a large bowl, whisk egg yolks and sugar over the boiling water until sugar dissolves.<br>2. In a separate bowl, whisk heavy cream, matcha, and vanilla until fluffy. Gently fold into the mascarpone.<br>3. Combine 1 tbsp matcha, 1 tbsp sugar, and hot water in a shallow bowl. Quickly dip ladyfingers in this mixture. Layer soaked ladyfingers and mascarpone cream in a serving dish.Chill for at least 4 hours or overnight. Dust with matcha powder before serving.'

    },
    'matcha-pudding': {
        title: 'Creamy Matcha Pudding',
        description: 'Light, Silky smooth desserts that gives a jiggly experince for the customers.',
        ingredients: '<strong>Ingredients:</strong><br>- 150 ml milk<br>- 1/2 cup granulated sugar<br>- 4 g gelatine powder<br>- 1 tbsp YOOMATCHA Culinary Grade Matcha<br>- 2 tbsp water<br>-120 g heavy cream<br>- Boiled azuki bean paste(optional)<br>- Mint leaves for garnish (optional)',
        instructions: '<strong>Instructions:</strong><br>1.Pour the gelatine powder in the bowl of water. Mix until the powder is melted and microwave it for 15-20 seconds<br>2. Put the sugar in a jar, then put the matcha powder.<br>3.Add the gelatine liquid to the jar, then add the remaining milk and cream and mix.<br>4.Gently pour the matcha mixture into the serving glass. Put the glass into the fridge for 3 hours.Then pour the mixture into individual serving dishes.Chill for at least 2 hours before serving.'
    },
    'matcha-milktea': {
        title: 'Iced Matcha Boba Milk Tea',
        description: 'A popular and refreshing drink combining matcha, milk, and chewy boba pearls.',
        ingredients: '<strong>Ingredients:</strong><br>- 2 tbsp YOOMATCHA Culinary Grade Matcha<br>- 2 oz hot water<br>- 1 1/2 cup milk<br>- 2 tsp maple syrup<br>- Cooked boba pearls (tapioca pearls)<br>- 2 cups Ice cubes<br>- 160 ml cold water',
        instructions: '<strong>Instructions:</strong><br>1.In a cocktail shaker, pour cold water, matcha powder and maple syrup. Shake it for 10-15 seconds until combined.<br>2. Cook the tapioca pearls according to the directions.After cooking, drain the pearls and add the maple syrup.<br>3. In a serving glass, add cooked boba pearls. Add ice cubes.<br>4. Pour in milk and sweetener.<br>5.Stir well before drinking and enjoy!'
    },
    'matcha-strawberries': {
        title: 'Matcha Covered Strawberries',
        description: 'A simple yet elegant treat, fresh juicy strawberries coated in delicious matcha white chocolate.',
        ingredients: '<strong>Ingredients:</strong><br>- 1 lb fresh strawberries, washed and dried<br>- 300 g white chocolate, chopped<br>- 1 tsp YOOMATCHA Culinary Matcha',
        instructions: '<strong>Instructions:</strong><br>1. Line a baking sheet with parchment paper.<br>2. Melt the white chocolate using a double boiler or microwave.<br>3. Sift matcha into the melted white chocolate and stir until fully combined <br>4. Dip each strawberry into the matcha chocolate, allowing excess to drip off. Place on the prepared baking sheet.<br>5. Chill for 15-30 minutes, or until the chocolate coating is set.'
    },
    'matcha-mochi': {
        title: 'Matcha Mochi',
        description: 'Soft and chewy Japanese dessert with a hint of delicate matcha flavor.',
        ingredients: '<strong>Ingredients:</strong><br>- 1 cup glutinous rice flour <br>- 1 cup granulated sugar<br>- 1 1/2 tsp YOOMATCHA Culinary Grade Matcha<br>- 1 cup water<br>- Potato starch or cornstarch (for dusting)<br>-3/4 cup coconut milk<br>-3/4 tsp vanilla extract',
        instructions: '<strong>Instructions:</strong><br>1.Preheat the oven to 275°F<br>2.Grease an square glass pan.In a medium bowl, whisk together the glutinous rice flour,sugar,coconut milk and vanila extract. After that pour the wet ingredients into the dry ingredients and whisk until smooth.<br>3.Pour the batter into the pan, cover tightly with foil, and bake it for 60 to 80 minutes.Remove the foil, let it cool and then re-cover it agin with foil.Remove the mochi into a cutting board and cut it into small cubes. Coat it with cornstarch.',
    }
};

const recipeCards = document.querySelectorAll('.recipe-card');
const recipePopupOverlay = document.getElementById('recipe-popup-overlay');
const recipePopupTitle = document.getElementById('recipe-popup-title');
const recipePopupDescription = document.getElementById('recipe-popup-description');
const recipePopupIngredients = document.getElementById('recipe-popup-ingredients');
const recipePopupInstructions = document.getElementById('recipe-popup-instructions');

recipeCards.forEach(card => {
    // Modify this event listener to target the button specifically
    card.querySelector('.view-recipe-btn').addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the card's general click event from firing
        const recipeId = this.dataset.target; // Use data-target for the recipe ID
        const details = recipeDetails[recipeId];

        if (details) {
            recipePopupTitle.textContent = details.title;
            recipePopupDescription.textContent = details.description;
            recipePopupIngredients.innerHTML = details.ingredients; // Use innerHTML for bolding
            recipePopupInstructions.innerHTML = details.instructions; // Use innerHTML for bolding
            recipePopupOverlay.classList.add('active');
        }
    });
});

// Event listener for the "Done" button in recipe popup
recipePopupOverlay.querySelectorAll('.popup-done-button').forEach(button => {
    button.addEventListener('click', () => {
        recipePopupOverlay.classList.remove('active');
    });
});
// Event listener for the 'x' close button in recipe popup
recipePopupOverlay.querySelectorAll('.close-popup').forEach(button => {
    button.addEventListener('click', () => {
        recipePopupOverlay.classList.remove('active');
    });
});

// Back to top button functionality
let mybutton = document.getElementById("back-to-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
