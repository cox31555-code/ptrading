import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

// Mock courses data with expanded descriptions
const forexCoursesData = [
  { "_id": "1", "title": "Beginner's Guide to Trading: Types of Trading (Part 1)", "price": "20", "discount": "0", "category": "Forex", "image": "/svg/forextrading.svg", "details": "Master the fundamentals of trading by exploring different trading styles. This comprehensive course introduces you to the core concepts of day trading, swing trading, and long-term investing strategies.", "description": "Welcome to your journey into the world of trading. Part 1 of our beginner's guide explores the foundation of successful trading by breaking down the various types of trading approaches available to modern traders. Learn how to identify which trading style aligns with your goals and personality. This course covers the essential characteristics of each trading type, helping you build a solid understanding before diving into more advanced strategies. Perfect for anyone new to the financial markets who wants to establish a strong foundational knowledge.", "reviews": [] },
  { "_id": "2", "title": "Beginner's Guide to Trading: Types of Trading (Part 2)", "price": "30", "discount": "0", "category": "Forex", "image": "/svg/forextrading.svg", "details": "Continue your trading education with advanced trading types and hybrid strategies. Learn how to combine different approaches for maximum market advantage.", "description": "Build upon your foundational knowledge with Part 2 of our beginner's guide. This course delves deeper into specialized trading types and hybrid strategies that blend multiple approaches. Discover how professional traders combine different methodologies to maximize their success in various market conditions. Gain insights into scalping, position trading, and algorithmic approaches while learning to adapt your strategy based on market dynamics. This comprehensive module prepares you for real-world trading scenarios.", "reviews": [] },
  { "_id": "3", "title": "Beginner's Guide to Trading: Types of Trading (Part 3)", "price": "40", "discount": "0", "category": "Forex", "image": "/svg/forextrading.svg", "details": "Complete your foundational understanding with advanced concepts and practical applications. Learn to execute strategies effectively in live market conditions.", "description": "Conclude your beginner's trading journey with Part 3, where theory meets practice. This final module of the Types of Trading series focuses on practical application and real-world execution. Learn how to implement different trading types in actual market conditions, understand the psychological aspects of trading, and develop a personal trading plan. Master risk management techniques specific to each trading style and discover how successful traders adapt their approaches to changing market environments.", "reviews": [] },
  { "_id": "4", "title": "Getting Started: Introduction to Trading Platforms", "price": "50", "discount": "0", "category": "Forex", "image": "/svg/laptop.svg", "details": "Get hands-on experience with industry-standard trading platforms. Learn navigation, tools, and features essential for executing trades efficiently.", "description": "Explore the digital tools that power modern trading. This comprehensive course introduces you to leading trading platforms used by professionals worldwide. Understand the interface layout, chart analysis tools, and order execution methods. Learn how to customize your workspace for optimal productivity and discover advanced features that can enhance your trading efficiency. From basic navigation to sophisticated analysis tools, this course covers everything you need to confidently operate professional trading platforms.", "reviews": [] },
  { "_id": "5", "title": "Trading Strategies: Introduction to Scalp Trading", "price": "60", "discount": "0", "category": "Forex", "image": "/svg/priceaction.svg", "details": "Master the art of quick profits with scalp trading. Learn to identify micro-movements and execute rapid trades with precision.", "description": "Discover one of the most dynamic trading strategies in the financial markets. This course introduces you to scalp trading, a technique focused on capturing small price movements over short timeframes. Learn the specific indicators and timing mechanisms used by successful scalpers, understand the importance of speed and precision, and develop strategies for managing quick-fire trades. Perfect for traders who thrive on fast-paced action and want to capitalize on intraday volatility.", "reviews": [] },
  { "_id": "6", "title": "Trading Strategies: Introduction to Swing Trading", "price": "70", "discount": "0", "category": "Forex", "image": "/svg/swing.svg", "details": "Capitalize on medium-term price swings with swing trading. Learn to identify reversal points and ride profitable trends.", "description": "Transform your understanding of intermediate-term trading with our swing trading course. This strategy focuses on capturing price swings that typically last from days to weeks. Learn to identify key support and resistance levels, recognize chart patterns that signal potential reversals, and time your entries and exits for maximum profitability. Discover how swing traders use technical analysis and volume patterns to stay ahead of market movements. This course balances the pace between scalping and long-term investing.", "reviews": [] },
  { "_id": "7", "title": "Trading Strategies: Introduction to Intraday Trading", "price": "80", "discount": "0", "category": "Forex", "image": "/svg/intradaytrading.svg", "details": "Master day-to-day trading strategies that capitalize on daily price movements. Learn timing, entry points, and exit strategies.", "description": "Enter the exciting world of intraday trading where fortunes can be made within a single trading session. This comprehensive course teaches you the strategies, timing, and psychology of day traders who operate within a single market day. Learn to identify morning gaps, track intraday momentum, and execute precise entry and exit strategies. Understand the unique risks and rewards of intraday trading and develop a disciplined approach to this fast-moving market segment.", "reviews": [] },
  { "_id": "8", "title": "Trading Strategies: Introduction to Long-Term Trading", "price": "90", "discount": "0", "category": "Forex", "image": "/svg/sharemarket.svg", "details": "Build wealth through patient, strategic long-term investing. Learn to hold positions through market cycles for substantial returns.", "description": "Discover the power of patience and strategic positioning in long-term trading. This course explores strategies for traders who believe in holding positions through multiple market cycles to capture major price movements. Learn fundamental analysis techniques, how to identify mega-trends, and the importance of patience in achieving significant returns. Understand position sizing, risk management over extended periods, and how to avoid emotional decision-making. Perfect for traders who prefer a more relaxed approach with higher profit potential.", "reviews": [] },
  { "_id": "9", "title": "Platform Basics: Introduction to MetaTrader", "price": "100", "discount": "0", "category": "Forex", "image": "/svg/laptop.svg", "details": "Master MetaTrader 4 and 5, the industry's most popular trading platforms. Learn all features and tools for professional trading.", "description": "Become proficient with MetaTrader, the platform of choice for millions of traders worldwide. This detailed course covers both MetaTrader 4 and 5, guiding you through every feature and function. Learn to create custom indicators, automate your trading with Expert Advisors, and analyze charts with professional-grade tools. Understand order management, risk management settings, and advanced charting capabilities. By the end of this course, you'll be able to navigate MetaTrader like a seasoned professional.", "reviews": [] },
  { "_id": "10", "title": "Platform Basics: Introduction to cTrader", "price": "110", "discount": "0", "category": "Forex", "image": "/svg/laptop.svg", "details": "Learn cTrader, the modern multi-asset trading platform. Discover advanced features and seamless execution tools.", "description": "Explore cTrader, a cutting-edge platform designed for serious traders seeking sophisticated analysis and execution tools. This course takes you through cTrader's innovative interface, advanced charting capabilities, and powerful order management systems. Learn to leverage algorithmic trading features, customize your workspace, and utilize the platform's superior execution speed. Understand how cTrader's unique features can give you an edge in competitive markets and master every aspect of this modern trading environment.", "reviews": [] },
  { "_id": "11", "title": "Platform Basics: Introduction to TradingView", "price": "120", "discount": "0", "category": "Forex", "image": "/svg/laptop.svg", "details": "Master TradingView, the premier charting and analysis platform. Learn advanced features for technical analysis and market insights.", "description": "Discover why TradingView has become the go-to platform for technical analysis worldwide. This comprehensive course teaches you to harness TradingView's powerful charting tools, advanced indicators, and collaborative features. Learn to create custom indicators using Pine Script, analyze multiple timeframes simultaneously, and identify trading opportunities across global markets. Understand how to use alerts effectively, manage watchlists, and integrate TradingView with your trading workflow. Master the platform that millions of traders rely on daily.", "reviews": [] },
  { "_id": "12", "title": "TradingView Essentials for Beginners", "price": "130", "discount": "0", "category": "Forex", "image": "/svg/laptop.svg", "details": "Get started with TradingView's core features and tools. Perfect introduction to technical analysis using the world's premier charting platform.", "description": "Begin your TradingView journey with this beginner-friendly course covering the platform's most essential features. Learn to read charts effectively, apply basic indicators, and conduct fundamental technical analysis. Understand support and resistance levels, trend lines, and moving averages through TradingView's intuitive interface. Discover how to set up price alerts and track your favorite assets. This course provides the perfect foundation for anyone looking to upgrade their technical analysis capabilities with professional-grade tools.", "reviews": [] },
  { "_id": "13", "title": "TradingView Mastery: Expert Level", "price": "140", "discount": "0", "category": "Forex", "image": "/svg/laptop.svg", "details": "Unlock advanced TradingView capabilities including Pine Script programming and expert strategies.", "description": "Take your TradingView expertise to the highest level with this advanced course. Learn to code custom indicators and strategies using Pine Script, the platform's powerful scripting language. Master advanced charting techniques, multi-timeframe analysis, and sophisticated trading systems. Discover how to optimize your trading strategies using backtesting features and create automated alerts based on complex conditions. This course transforms you into a TradingView expert capable of implementing the most sophisticated trading solutions.", "reviews": [] },
  { "_id": "14", "title": "TradingView Mastery: Advanced Level", "price": "150", "discount": "0", "category": "Forex", "image": "/svg/laptop.svg", "details": "Advance your TradingView skills with professional-level strategies and indicator development.", "description": "Bridge the gap between basic and expert-level TradingView usage with this advanced course. Learn intermediate Pine Script programming to create custom indicators that match your specific trading methodology. Explore advanced analysis techniques including market profile, order flow analysis, and volume-based strategies. Understand how professional traders use TradingView to identify high-probability trading setups. Master the platform's advanced features while developing sophisticated trading systems that provide a competitive advantage in the markets.", "reviews": [] },
  { "_id": "15", "title": "Online Trading Safety: How to Spot Scams", "price": "160", "discount": "0", "category": "Forex", "image": "/svg/login.svg", "details": "Protect yourself from trading scams and fraudulent schemes. Learn red flags and safety protocols for secure trading.", "description": "Safeguard your capital and personal information with this essential course on trading security. Learn to identify common scams targeting traders, understand how fraudsters operate, and recognize red flags before falling victim. Discover best practices for choosing legitimate brokers, protecting your accounts, and verifying trading platforms. This course covers phishing schemes, Ponzi schemes, and unauthorized account access. By understanding these threats, you'll trade with confidence knowing you've protected yourself and your investment.", "reviews": [] },
  { "_id": "16", "title": "Algorithmic Trading: Introduction to Bots (Part 1)", "price": "170", "discount": "0", "category": "Forex", "image": "/svg/bots.svg", "details": "Discover the world of automated trading with algorithmic bots. Learn fundamentals of bot-based trading strategies.", "description": "Enter the future of trading with algorithmic trading systems and bots. Part 1 of this series introduces the core concepts of automated trading, where algorithms execute trades based on predefined criteria. Learn how bots eliminate emotional decision-making, execute trades at inhuman speed, and operate 24/7 without fatigue. Understand the basic architecture of trading bots and how they can systematically execute complex strategies. This course provides the foundation for understanding how modern algorithmic trading revolutionizes the markets.", "reviews": [] },
  { "_id": "17", "title": "Algorithmic Trading: Introduction to Bots (Part 2)", "price": "180", "discount": "0", "category": "Forex", "image": "/svg/bots.svg", "details": "Advance your algorithmic trading knowledge with strategy design and implementation techniques.", "description": "Deepen your understanding of algorithmic trading with Part 2, focusing on practical strategy design and implementation. Learn how to develop trading logic that bots can execute reliably, understand backtesting methodologies, and optimize bot parameters for different market conditions. Discover how to integrate multiple indicators into bot logic and manage risk programmatically. Understand the challenges of algorithmic trading including slippage, latency, and market impact. This course prepares you to design and implement sophisticated automated trading systems.", "reviews": [] },
  { "_id": "18", "title": "Bot Development: Creating Custom Bots (Part 1)", "price": "190", "discount": "0", "category": "Forex", "image": "/svg/bots.svg", "details": "Learn to code trading bots from scratch. Build your first automated trading system with step-by-step guidance.", "description": "Transition from theory to practice by building your own trading bots. Part 1 covers the fundamentals of bot development, teaching you the programming basics needed to create functional trading systems. Learn to connect to broker APIs, retrieve market data, and execute orders programmatically. Understand the structure of a professional trading bot and the best practices for reliable automation. This hands-on course equips you with the skills to develop bots tailored to your specific trading strategies and needs.", "reviews": [] },
  { "_id": "19", "title": "Bot Development: Creating Custom Bots (Part 2)", "price": "200", "discount": "0", "category": "Forex", "image": "/svg/bots.svg", "details": "Master advanced bot development with complex strategies and risk management systems.", "description": "Complete your bot development education with Part 2, focusing on advanced implementations and sophisticated features. Learn to code complex decision-making systems, implement portfolio-level risk management, and integrate multiple data sources. Discover how to build bots that adapt to market conditions and optimize their performance continuously. Understand logging, monitoring, and debugging techniques essential for production-level bots. By course end, you'll be capable of developing enterprise-quality trading bots that execute your most advanced trading strategies.", "reviews": [] },
  { "_id": "20", "title": "AI in Trading: Creating AI Bots (Part 1)", "price": "210", "discount": "0", "category": "Forex", "image": "/svg/bots.svg", "details": "Explore artificial intelligence in trading. Learn machine learning fundamentals for creating intelligent trading bots.", "description": "Venture into the cutting edge of trading technology with AI-powered trading systems. Part 1 introduces machine learning concepts applied to financial markets, teaching you how algorithms can learn from historical data to predict future price movements. Understand supervised and unsupervised learning, feature engineering for trading, and how to prepare market data for machine learning models. Learn the fundamentals of neural networks and deep learning. This course opens doors to creating bots that continuously improve through learning from market patterns.", "reviews": [] },
  { "_id": "21", "title": "AI in Trading: Creating AI Bots (Part 2)", "price": "220", "discount": "0", "category": "Forex", "image": "/svg/bots.svg", "details": "Develop sophisticated AI trading systems with neural networks and predictive models.", "description": "Build state-of-the-art AI trading bots with Part 2, which focuses on implementing advanced machine learning models for trading. Learn to train neural networks on market data, optimize model parameters, and validate performance using proper methodologies. Discover how to handle overfitting, manage market regime changes, and deploy AI systems responsibly. Understand the integration of AI predictions with trading execution systems. This advanced course prepares you to leverage artificial intelligence for maximum trading potential while understanding the unique challenges of machine learning in finance.", "reviews": [] },
  { "_id": "22", "title": "Cryptocurrency Basics: Introduction to Crypto (Part 1)", "price": "230", "discount": "0", "category": "Forex", "image": "/svg/cryptotrading.svg", "details": "Master cryptocurrency fundamentals. Learn blockchain technology and digital asset trading basics.", "description": "Begin your cryptocurrency journey with a solid foundation in blockchain technology and digital assets. Part 1 covers the revolutionary technology behind cryptocurrencies, the history of Bitcoin, and how blockchain secures transactions. Learn about different types of cryptocurrencies, wallet management, and exchanges. Understand the unique characteristics that make crypto markets distinct from traditional forex and equity markets. Perfect for traders new to the crypto space seeking a comprehensive introduction to this dynamic market segment.", "reviews": [] },
  { "_id": "23", "title": "Cryptocurrency Basics: Introduction to Crypto (Part 2)", "price": "240", "discount": "0", "category": "Forex", "image": "/svg/cryptotrading.svg", "details": "Deepen your crypto knowledge with advanced concepts and market analysis techniques.", "description": "Continue your cryptocurrency education with Part 2, exploring advanced concepts and specialized analysis techniques. Learn about smart contracts, tokenomics, and how different cryptocurrencies solve specific problems. Understand the factors driving crypto valuations, regulatory considerations, and security best practices. Discover technical analysis specific to cryptocurrency markets and how to identify emerging trends. This course provides the knowledge needed to trade cryptocurrencies confidently while understanding the fundamental drivers of this evolving asset class.", "reviews": [] },
  { "_id": "24", "title": "Bitcoin for Beginners: Getting Started", "price": "250", "discount": "0", "category": "Forex", "image": "/svg/cryptotrading.svg", "details": "Start your Bitcoin trading journey. Learn the essentials of the world's leading cryptocurrency.", "description": "Focus specifically on Bitcoin, the cryptocurrency that started it all. This beginner course teaches you everything needed to trade Bitcoin effectively. Understand Bitcoin's unique properties, its halving cycles, and the factors that influence its price. Learn how to securely store Bitcoin, use different platforms for trading, and protect yourself from common Bitcoin-specific scams. Discover the historical performance of Bitcoin and its role in the broader cryptocurrency ecosystem. This course is essential for any trader looking to participate in Bitcoin markets.", "reviews": [] },
  { "_id": "25", "title": "Bitcoin Mastery: Expert Guide", "price": "260", "discount": "0", "category": "Forex", "image": "/svg/cryptotrading.svg", "details": "Become a Bitcoin expert with advanced strategies and sophisticated analysis techniques.", "description": "Achieve mastery in Bitcoin trading with this expert-level course covering sophisticated strategies and deep analysis. Learn on-chain analysis techniques that professional traders use to spot Bitcoin accumulation and distribution. Understand advanced technical analysis specific to Bitcoin, including patterns unique to crypto markets. Discover how institutional investors trade Bitcoin and the impact of large transactions on price movements. Master multiple timeframe analysis and learn to anticipate major Bitcoin price moves. This course transforms you into a Bitcoin expert capable of executing professional-grade trading strategies.", "reviews": [] },
  { "_id": "26", "title": "Bitcoin Mastery: Advanced Guide", "price": "270", "discount": "0", "category": "Forex", "image": "/svg/cryptotrading.svg", "details": "Perfect your Bitcoin trading with advanced techniques and strategic portfolio approaches.", "description": "Progress to the highest levels of Bitcoin trading knowledge with this advanced guide. Learn hedging strategies, options trading on Bitcoin, and portfolio management techniques specific to crypto assets. Understand the correlation between Bitcoin and other assets, including traditional markets. Discover how to use derivatives markets effectively and manage leverage risk. Learn psychological aspects of Bitcoin trading and how to maintain discipline during extreme market volatility. This comprehensive course provides everything needed to trade Bitcoin at the professional level.", "reviews": [] },
  { "_id": "27", "title": "Precious Metals: Introduction to Gold (Part 1)", "price": "250", "discount": "0", "category": "Forex", "image": "/svg/forextrading.svg", "details": "Discover gold trading fundamentals. Learn the factors driving gold prices and basic trading strategies.", "description": "Explore the precious metals markets, starting with gold trading fundamentals. Part 1 introduces you to the gold market structure, historical significance, and modern trading mechanisms. Learn about gold supply and demand dynamics, geopolitical factors affecting prices, and how to trade gold effectively. Understand the role of gold as a safe-haven asset and its relationship with currency values. Discover different ways to gain gold exposure through spot trading, futures, and ETFs. This course prepares you to trade one of the world's most stable and universally recognized assets.", "reviews": [] },
  { "_id": "28", "title": "Precious Metals: Introduction to Gold (Part 2)", "price": "260", "discount": "0", "category": "Forex", "image": "/svg/forextrading.svg", "details": "Advance your gold trading with technical analysis and macro-economic factors.", "description": "Deepen your gold trading expertise with Part 2, focusing on technical analysis and macroeconomic factors. Learn how central bank policies influence gold prices and how to anticipate major market moves. Understand the relationship between gold and interest rates, inflation expectations, and US dollar movements. Master technical analysis specific to gold, including pattern recognition and support/resistance levels. Discover seasonal trends in gold trading and how to position yourself for maximum profitability. This course elevates your gold trading to professional standards.", "reviews": [] },
  { "_id": "29", "title": "Gold Trading: Candlesticks & Patterns (Part 1)", "price": "280", "discount": "0", "category": "Forex", "image": "/svg/priceaction.svg", "details": "Master candlestick analysis for gold trading. Learn to read and interpret price patterns.", "description": "Develop expertise in candlestick analysis applied specifically to gold trading. Part 1 covers the fundamentals of candlestick interpretation, teaching you to identify single and multiple candlestick patterns. Learn what each candlestick formation reveals about market sentiment and price momentum. Understand how to use candlesticks to identify entry and exit points in gold trading. Discover how professional gold traders use candlestick patterns to make high-probability trades. This course provides the technical foundation for consistent gold trading success.", "reviews": [] },
  { "_id": "30", "title": "Gold Trading: Candlesticks & Patterns (Part 2)", "price": "290", "discount": "0", "category": "Forex", "image": "/svg/priceaction.svg", "details": "Advance your candlestick mastery with complex patterns and confluence strategies.", "description": "Build on candlestick fundamentals with Part 2, exploring advanced patterns and confluence analysis. Learn to identify complex multi-candlestick patterns that signal major price reversals and continuations. Discover how to combine candlestick patterns with other technical indicators for increased accuracy. Understand the psychology behind each pattern and how market participants drive price movements. Learn how to use candlesticks in multi-timeframe analysis for superior trading decisions. This advanced course transforms you into a master of candlestick analysis for gold trading.", "reviews": [] },
  { "_id": "31", "title": "Gold Trading: Candlesticks & Patterns (Part 3)", "price": "300", "discount": "0", "category": "Forex", "image": "/svg/priceaction.svg", "details": "Complete your candlestick mastery with professional-level pattern strategies and risk management.", "description": "Conclude your candlestick education with Part 3, focusing on professional implementation and risk management. Learn how institutional traders use candlestick analysis within comprehensive trading systems. Master the integration of candlestick patterns with volume analysis, support and resistance, and momentum indicators. Discover how to manage risk effectively when trading candlestick-based patterns and implement proper position sizing. Understand how to adapt candlestick strategies to different market conditions and timeframes. This final course module prepares you for professional-level gold trading based on candlestick analysis.", "reviews": [] },
  { "_id": "32", "title": "Precious Metals: Introduction to Silver (Part 1)", "price": "310", "discount": "0", "category": "Forex", "image": "/svg/forextrading.svg", "details": "Enter the silver market with fundamental knowledge and trading strategies.", "description": "Explore silver trading, one of the most dynamic precious metals markets. Part 1 provides foundational knowledge about silver's industrial applications, investment demand, and price drivers. Learn about silver supply and demand dynamics, different silver products available for trading, and how silver correlates with other assets. Understand the unique characteristics of silver trading compared to gold. Discover how to identify silver trading opportunities and implement basic trading strategies. This course is perfect for traders seeking exposure to a precious metal with unique market characteristics.", "reviews": [] },
  { "_id": "33", "title": "Precious Metals: Introduction to Silver (Part 2)", "price": "320", "discount": "0", "category": "Forex", "image": "/svg/forextrading.svg", "details": "Advance your silver trading with technical analysis and volatility strategies.", "description": "Deepen your silver trading knowledge with Part 2, focusing on technical analysis and capitalizing on silver's higher volatility. Learn how to use silver's price swings to your advantage through various trading strategies. Understand the factors that create silver price spikes and how to position yourself appropriately. Master technical analysis applied to silver markets, including identifying breakouts and reversals. Discover how the silver to gold ratio provides trading insights. This course prepares you to trade silver confidently and profitably.", "reviews": [] },
  { "_id": "34", "title": "Precious Metals: Introduction to Silver (Part 3)", "price": "330", "discount": "0", "category": "Forex", "image": "/svg/forextrading.svg", "details": "Master advanced silver trading strategies and portfolio integration.", "description": "Complete your silver trading education with Part 3, covering advanced strategies and portfolio management. Learn how professional traders use silver to hedge against currency fluctuations and inflation. Discover advanced technical analysis for silver markets and how to identify high-probability trades. Understand how to integrate silver trading into a diversified portfolio and manage correlation risks. Learn to trade silver futures, options, and ETFs effectively. This comprehensive course positions you as a sophisticated silver trader capable of executing complex strategies.", "reviews": [] },
  { "_id": "35", "title": "Silver Trading: Candlesticks & Patterns (Part 1)", "price": "340", "discount": "0", "category": "Forex", "image": "/svg/priceaction.svg", "details": "Master candlestick patterns in silver trading. Learn precise entry and exit techniques.", "description": "Apply candlestick analysis specifically to silver markets with this comprehensive course. Part 1 covers candlestick fundamentals while highlighting silver-specific price patterns and behaviors. Learn to identify single and multi-candlestick formations that signal reliable trading opportunities in silver. Understand how silver's volatility affects candlestick patterns compared to gold. Discover how to use candlestick analysis to time entries and exits with precision. This course provides the technical tools needed to trade silver confidently using proven candlestick methods.", "reviews": [] },
  { "_id": "36", "title": "Silver Trading: Candlesticks & Patterns (Part 2)", "price": "350", "discount": "0", "category": "Forex", "image": "/svg/priceaction.svg", "details": "Advance your silver candlestick trading with complex patterns and system integration.", "description": "Build advanced candlestick expertise specific to silver trading with Part 2. Learn to recognize complex patterns that precede major silver price moves. Understand how to combine candlestick analysis with volume and momentum indicators for enhanced accuracy. Discover professional trading systems built around candlestick patterns for silver. Learn multi-timeframe candlestick analysis to identify setups with higher probability. Understand how to adapt candlestick strategies to silver's unique volatility characteristics. This course transforms you into a sophisticated candlestick trader in silver markets.", "reviews": [] },
  { "_id": "37", "title": "Silver Trading: Candlesticks & Patterns (Part 3)", "price": "360", "discount": "0", "category": "Forex", "image": "/svg/priceaction.svg", "details": "Achieve mastery in silver candlestick trading with professional strategies and execution.", "description": "Achieve complete mastery of candlestick trading in silver markets with Part 3. Learn how institutional traders use candlestick patterns within professional trading frameworks. Master the integration of candlestick patterns with risk management, position sizing, and portfolio strategies. Discover how to trade candlestick patterns across different timeframes and market conditions. Understand psychological aspects of pattern trading and maintaining discipline in silver's volatile environment. Learn professional execution techniques and advanced money management. This final module prepares you for expert-level silver trading using candlestick methodology.", "reviews": [] }
];

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

class CoursesAPI {
  static async getAllCourses(params = {}) {
    // Use mock data as primary source
    console.log("Loading courses from mock data with params:", params);
    return this.getCoursesFromMockData(params);
  }

  static async getCoursesFromMockData(params = {}) {
    try {
      const mockCourses = forexCoursesData;

      // Apply filters
      let filtered = mockCourses;

      // Category filter
      if (params.category) {
        filtered = filtered.filter(course =>
          course.category?.toLowerCase() === params.category?.toLowerCase()
        );
      }

      // Price range filter
      if (params.priceFrom !== undefined) {
        filtered = filtered.filter(course =>
          parseFloat(course.price) >= params.priceFrom
        );
      }
      if (params.priceTo !== undefined) {
        filtered = filtered.filter(course =>
          parseFloat(course.price) <= params.priceTo
        );
      }

      // Search filter
      if (params.search) {
        const searchLower = params.search.toLowerCase();
        filtered = filtered.filter(course =>
          course.title?.toLowerCase().includes(searchLower) ||
          course.details?.toLowerCase().includes(searchLower)
        );
      }

      // Pagination
      const page = params.page || 1;
      const limit = params.limit || 12;
      const skip = (page - 1) * limit;
      const paginatedCourses = filtered.slice(skip, skip + limit);

      return {
        data: {
          data: paginatedCourses,
          total: filtered.length,
          page: page,
          pages: Math.ceil(filtered.length / limit)
        }
      };
    } catch (error) {
      console.error("Error loading mock courses:", error);
      return { data: { data: [] } };
    }
  }

  static async getCourseById(id) {
    // Use mock data as primary source
    console.log("Looking for course with ID:", id, "Type:", typeof id);
    console.log("Available mock courses:", forexCoursesData.map(c => ({ _id: c._id, title: c.title })));

    const mockCourse = forexCoursesData.find(course => {
      return String(course._id) === String(id);
    });

    if (mockCourse) {
      console.log("Found mock course:", mockCourse.title);
      return { data: { data: mockCourse } };
    }

    console.log("Course not found in mock data, attempting API");

    // Fallback to API if course not found in mock data
    try {
      const response = await axiosInstance.get(`/courses/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching course from API:", error);
      throw new Error("Course not found");
    }
  }

  /**
   * Get unique categories from courses
   * @returns {Promise} Array of categories
   */
  static async getCategories() {
    try {
      const response = await axiosInstance.get("/courses");
      const courses = response.data.data.data;
      const categories = [...new Set(courses.map((course) => course.category))];
      return categories.filter(Boolean); // Remove empty values
    } catch (error) {
      console.error("Error fetching categories from API, using mock data:", error);
      // Fallback to mock data
      const mockCourses = forexCoursesData;
      const categories = [...new Set(mockCourses.map((course) => course.category))];
      return categories.filter(Boolean);
    }
  }

  /**
   * Get price range from all courses
   * @returns {Promise} Object with min and max prices
   */
  static async getPriceRange() {
    try {
      const response = await axiosInstance.get("/courses");
      const courses = response.data.data.data;

      if (courses.length === 0) {
        return { min: 0, max: 1000 };
      }

      const prices = courses
        .map((course) => parseFloat(course.price))
        .filter((price) => !isNaN(price));

      return {
        min: Math.min(...prices),
        max: Math.max(...prices),
      };
    } catch (error) {
      console.error("Error fetching price range from API, using mock data:", error);
      // Fallback to mock data
      try {
        const mockCourses = forexCoursesData;

        if (mockCourses.length === 0) {
          return { min: 0, max: 1000 };
        }

        const prices = mockCourses
          .map((course) => parseFloat(course.price))
          .filter((price) => !isNaN(price));

        return {
          min: Math.min(...prices),
          max: Math.max(...prices),
        };
      } catch (mockError) {
        console.error("Error loading mock price range:", mockError);
        return { min: 0, max: 1000 };
      }
    }
  }

  static filterCoursesByPrice(courses, priceFrom, priceTo) {
    return courses.filter((course) => {
      const price = parseFloat(course.price);
      if (isNaN(price)) return false;

      const minPrice = priceFrom !== undefined ? priceFrom : 0;
      const maxPrice = priceTo !== undefined ? priceTo : Infinity;

      return price >= minPrice && price <= maxPrice;
    });
  }

  static buildUrlWithParams(baseUrl, params) {
    const url = new URL(baseUrl, window.location.origin);

    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, value);
      }
    });

    return url.pathname + url.search;
  }
}

export default CoursesAPI;
