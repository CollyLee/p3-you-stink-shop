const db = require('./connection');
const { User, Product, Brand } = require('../models');

db.once('open', async () => {
  await Brand.deleteMany();

  const brands = await Brand.insertMany([
    { name: 'Suave' },
    { name: 'Old Spice' },
    { name: 'Speed Stick' },
    { name: 'Secret' },
    { name: 'Dove' },
    { name: 'Arm & Hammer'},
    { name: 'Degree'}

  ]);


  console.log('brands seeded');

  await Product.deleteMany();


  const products = await Product.insertMany([
    {
      name: 'Suave Antiperspirant Deodorant, Invisible Solid, Powder',
      description:
        'Anti-staining. Aluminum zirconium tetrachlorohydrex gly. 48 hour protection. suave.com. how2recycle.info. SmartLabel app enabled. PETA Cruelty free. Globally, Suave does not test on animals and is certified cruelty-free by PETA. Made in USA.',
      image: 's-24-p.jpg',
      brand: brands[0]._id,
      price: 2.69
    },
    {
      name: 'Secret Deodorant/Antiperspirant, Shower Fresh',
      description:
        'Stay true with Secret. You can always be confident with the original. With pH-balanced protection to work with your bodys natural chemistry, Secret Antiperspirant and Deodorant helps you stay confident during the day. Trust the odor- and sweat-fighting protection of Secret.',
      image: 'secret-ph-sf.jpg',
      brand: brands[3]._id,
      price: 4.59
    },
    {
      name: 'Dove Antiperspirant Deodorant, Original Clean',
      brand: brands[4]._id,
      description:
        'Aluminum chlorohydrate. 1/4 moisturizers. All day. Sweat & odor protection. how2recycle.info. Smartlabel app enabled. Questions? Call toll free 1-800-761-3683. Peta: Cruelty free. Globally, Dove does not test on animals. Made in USA.',
      image: 'dove-original-clean.jpg',
      price: 5.19
    },
    {
      name: 'Old Spice High Endurance Deodorant, Pure Sport',
      brand: brands[1]._id,
      description:
        'Aluminum free. Contains odor-fighting atomic robots that shoot lasers at your stench monsters and replaces them with fresh, clean, masculine scent elves. 48 hour odor protection.',
      image: 'os-ps-nt.jpg',
      price: 4.59
    },
    {
      name: 'Arm & Hammer UltraMax Antiperspirant Deodorant, Fresh, Solid',
      brand: brands[5]._id,
      description:
        'Advanced sweat control. Long-lasting protection. 48 h. The standard of purity.',
      image: 'arm-hammer-um-fresh.jpg',
      price: 3.29
    },
    {
      name: 'Secret Antiperspirant/Deodorant, Powder Fresh, PH Balanced',
      brand: brands[3]._id,
      description:
        'Stay true with Secret. You can always be confident with the original. With pH-balanced protection to work with your bodys natural chemistry, Secret Antiperspirant and Deodorant helps you stay confident during the day. Trust the odor- and sweat-fighting protection of Secret.',
      image: 'secret-is-pf.jpg',
      price: 4.59
    },
    {
      name: 'Degree Antiperspirant Deodorant, Shower Clean',
      brand: brands[6]._id,
      description:
        'Aluminum zirconium tetrachlorohydrex gly. 48 h sweat & odor protection.',
      image: 'degree-48-sc.jpg',
      price: 3.79
    },
    {
      name: 'Speed Stick Deodorant, Regular',
      brand: brands[2]._id,
      description:
        'Aluminum free. All day fresh. 24 hour odor fighting formula. Feel clean, masculine and confident. Comfort guard applicator for comfort and control.',
      image: 'ss-regular.jpg',
      price: 2.09
    },
    {
      name: 'Dove Advanced Care Antiperspirant Deodorant, Go Fresh, Cool Essentials',
      brand: brands[4]._id,
      description: 'Aluminum Zirconium Trichlorohydrex Gly. 1/4 moisturizers with natural oil. 48h. Effective protection that is kind to skin. Building girls self-esteem.',
      image: 'dove-ac-ce.jpg',
      price: 6.89
    },
    {
      name: 'Degree Motionsense Antiperspirant, Pure Clean, Black + White, Ultraclean',
      brand: brands[6]._id,
      description:
        'Aluminum zirconium tetrachlorohydrex gly. Anti yellow stain. Anti white marks. Invisible solid. 48 H. The more you move the more it protects.',
      image: 'degree-ms-pc.jpg',
      price: 5.79
    },
    {
      name: 'Secret OutLast Sweat & Odor Antiperspirant, Completely Clean, Clear Gel',
      brand: brands[3]._id,
      description:
        'Sweat is the last thing you need to be worried about. Take one worry off of your plate first thing in the morning. With a couple quick swipes, youll have confidence all day. Secret Outlast fights sweat better (Vs. Leading invisible solid) so you get all strength and no sweat for 48 hours. Clear Gel goes on clear for no white marks. When you use Secret, youre getting the peace of mind that your deodorant will work as hard as you do.',
      image: 'secret-ol-cc-gel.jpg',
      price: 6.89
    },
    {
      name: 'Degree Anti-Perspirant & Deodorant, Shower Clean, Dry Protection',
      brand: brands[6]._id,
      description:
        'Buy 2 and save. Invisible solid.',
      image: 'degree-tw-dp.jpg',
      price: 6.89
    },
    {
      name: 'Secret Outlast Antiperspirant, Sweat & Odor, Completely Clean',
      brand: brands[3]._id,
      description:
        'Sweat is the last thing you need to be worried about. Take one worry off of your plate first thing in the morning. With a couple quick swipes, youll have confidence all day. Secret Outlast fights sweat better so you get all strength and no sweat for 48 hours. Invisible solid goes on dry and stays dry, just like an anti-perspirant should be. When you use Secret, youre getting the peace of mind that your deodorant will work as hard as you do.',
      image: 'secret-ol-cc.jpg',
      price: 6.89
    },
    {
      name: 'Dove Antiperspirant, 72H Protection, Extra Fresh',
      brand: brands[4]._id,
      description:
        'Looking for an antiperspirant deodorant for men thats designed to keep you feeling fresh and confident? Try Dove Men+Care Extra Fresh Antiperspirant Deodorant Stick. Our Extra Fresh antiperspirant deodorant provides powerful 72-hour protection against sweat and odor for lasting freshness. This antiperspirant for men is formulated with our ¼ moisturizing cream to deliver skin moisturization and helps protect against skin irritation. Dove Men+Care Extra Fresh Antiperspirant Deodorant features a long lasting energizing citrus scent to invigorate your senses and leave you feeling fresh all day. Simply apply Dove Men+Care Extra Fresh Antiperspirant Deodorant in evenly onto each of your underarms for best results. You now have the powerful protection you need. All Dove products are cruelty-free, following Doves global commitment not to test on animals. Looking for more Dove Men+Care skin care products? Try the full range of Dove Men+Care products, including deodorants, antiperspirants, dry spray antiperspirant deodorants, body washes, face and body bars, and hair care products.',
      image: 'dove-72.jpg',
      price: 8.09
    },
    {
      name: 'Dove Advanced Care Antiperspirant Deodorant, Lavender Fresh',
      brand: brands[4]._id,
      description:
        '1/4 moisturizers with natural oil. Antiperspirant deodorant. 48 h. Effective protection that is kind to skin. Building girls self-esteem.',
      image: 'dove-lav.jpg',
      price: 6.89
    },
    {
      name: 'Secret Antiperspirant, Lavender, Clear Gel',
      brand: brands[3]._id,
      description:
        'Designed with scents that last, the Secret Fresh Collection has scents you love from our former Scent Expressions and Destinations collections, now with scent-enhancing technology. Secret Clear Gel goes on clear, dries quickly, and helps eliminate odors with 48-hour odor control and wetness protection. Discover unstoppable freshness with Secret Clear Gel. This relaxing lavender scent was previously called Luxe Lavender.',
      image: 'secret-lav.jpg',
      price: 6.89
    },
    {
      name: 'Dove Advanced Care Anti-Perspirant, Invisible, Clear Finish',
      brand: brands[4]._id,
      description:
        'Aluminum zirconium tetrachlorohydrex gly. 48h sweat & odor protection. Invisible. No white marks on 100 colors. 48h. Our best care for beautiful underarms.',
      image: 'dove-ac-invis.jpg',
      price: 6.89
    },
    {
      name: 'Old Spice High Endurance Deodorant, Pure Sport, Identical Twin, Value Pack',
      brand: brands[1]._id,
      description:
        'Aluminum free. Contains odor-fighting atomic robots that shoot laser at your stench monster and replaces them with fresh, clean, masculine scent elves. 48 hour odor protection.',
      image: 'os-ps.jpg',
      price: 7.49
    },
    {
      name: 'Old Spice Anti-Perspirant & Deodorant, Fiji, with Palm Tree',
      brand: brands[1]._id,
      description:
        'The Old Spice Fresher collection of scents is all about discovering the freshness of nature but after youve trekked to the most remote places on earth and youve made it home youll discover that the freshness was inside of you the whole time because youre already great, you just smell like a stinky human sometimes but thats okay. Fiji with Palm Tree smells like a place where you dont need to wear pants or shoes or say hello to coworkers you dont like at the coffee machine. It has coconut and lavender scents too. Old Spice Mens Invisible Solid Antiperspirant and Deodorant reduces armpit sweat, goes on invisible, and stays feeling dry. So bring the scent of your adventures home or smell like the adventures you havent ventured yet. We wont judge. Just do you, guy.',
      image: 'os-fiji.jpg',
      price: 6.89
    },
    {
      name: 'Dove Advanced Care Antiperspirant Deodorant, Beauty Finish, Dry Spray',
      brand: brands[4]._id,
      description:
        'Building girls self-esteem. Aluminum chlorohydrate. 48h. Non-irritant. 1/4 moisturizers with natural oil. Effective protection that feels instantly dry and is kind to skin. ',
      image: 'dove-ac-dry-spray.jpg',
      price: 8.09
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
