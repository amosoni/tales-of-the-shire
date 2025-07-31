import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 清理现有数据
  console.log('Cleaning existing data...')
  await prisma.comment.deleteMany()
  await prisma.post.deleteMany()
  
  // 创建测试用户
  const user = await prisma.user.upsert({
    where: { email: 'hobbit@shire.com' },
    update: {},
    create: {
      username: 'Hobbit',
      email: 'hobbit@shire.com',
      title: 'Master Chef',
      level: 42,
      joinDate: new Date('2024-01-15'),
    },
  })

  // 创建用户统计数据
  await prisma.userStats.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      userId: user.id,
      recipesViewed: 25,
      charactersMet: 22,
      decorationsCrafted: 10,
      questsCompleted: 15,
    },
  })

  // 创建用户收藏数据
  await prisma.userFavorites.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      userId: user.id,
      recipes: 8,
      npcs: 5,
      decorations: 12,
    },
  })

  // 创建活动记录
  const activities = [
    {
      userId: user.id,
      type: 'recipe_view',
      title: 'Viewed Hobbit Breakfast Pie recipe',
      description: 'Learned how to make the perfect hobbit breakfast',
      xpGained: 5,
    },
    {
      userId: user.id,
      type: 'character_meet',
      title: 'Met Bilbo Baggins in Bywater',
      description: 'Had a wonderful conversation with the famous hobbit',
      xpGained: 10,
    },
    {
      userId: user.id,
      type: 'decoration_craft',
      title: 'Crafted Hobbit Armchair',
      description: 'Created a comfortable chair for the hobbit hole',
      xpGained: 15,
    },
  ]

  for (const activity of activities) {
    await prisma.activity.create({
      data: activity,
    })
  }

  // 创建一些食谱数据
  const recipes = [
    {
      name: 'Hobbit Breakfast Pie',
      description: 'A hearty breakfast pie perfect for second breakfast',
      ingredients: JSON.stringify(['eggs', 'bacon', 'cheese', 'pastry']),
      instructions: JSON.stringify(['Mix ingredients', 'Bake at 350F', 'Serve hot']),
      difficulty: 'Medium',
      category: 'Breakfast',
    },
    {
      name: 'Second Breakfast Special',
      description: 'A light meal between breakfast and elevenses',
      ingredients: JSON.stringify(['bread', 'butter', 'honey', 'tea']),
      instructions: JSON.stringify(['Toast bread', 'Spread butter', 'Drizzle honey']),
      difficulty: 'Easy',
      category: 'Breakfast',
    },
  ]

  for (const recipe of recipes) {
    await prisma.recipe.create({
      data: recipe,
    })
  }

  // 创建一些角色数据
  const characters = [
    {
      name: 'Bilbo Baggins',
      description: 'A well-respected hobbit of Bag End',
      location: 'Bag End, Hobbiton',
    },
    {
      name: 'Samwise Gamgee',
      description: 'A loyal friend and gardener',
      location: 'Number 3, Bagshot Row',
    },
  ]

  for (const character of characters) {
    await prisma.character.create({
      data: character,
    })
  }

  // 创建一些示例帖子
  const posts = [
    {
      title: 'Welcome to the Shire Community!',
      content: 'Hello everyone! I\'m a new hobbit and I\'m very happy to share the wonderful life of the Shire with you all. Are there any interesting activities here?',
      authorId: user.id,
    },
    {
      title: 'Sharing My Hobbit Hole Renovation Experience',
      content: 'I recently renovated my hobbit hole and added some new decorations. I especially love those handcrafted furniture pieces that make the whole home feel warm and cozy. Does anyone have any renovation tips?',
      authorId: user.id,
    },
    {
      title: 'Today\'s Adventures at the Green Dragon Inn',
      content: 'Today I met some interesting travelers at the Green Dragon Inn and heard them tell stories about the outside world. Although the Shire is wonderful, it\'s also interesting to occasionally hear stories from beyond.',
      authorId: user.id,
    },
  ]

  const createdPosts = []
  for (const post of posts) {
    const createdPost = await prisma.post.create({
      data: post,
    })
    createdPosts.push(createdPost)
  }

  // 为第一个帖子添加一些评论
  const comments = [
    {
      content: 'Welcome to the Shire! There are indeed many interesting activities here, such as weekly markets and festival celebrations.',
      postId: createdPosts[0].id,
      authorId: user.id,
    },
    {
      content: 'I also love handcrafted furniture, they make the home feel more welcoming.',
      postId: createdPosts[1].id,
      authorId: user.id,
    },
    {
      content: 'The Green Dragon Inn is the best gathering place in the Shire!',
      postId: createdPosts[2].id,
      authorId: user.id,
    },
  ]

  for (const comment of comments) {
    await prisma.comment.create({
      data: comment,
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 