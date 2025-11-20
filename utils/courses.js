import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

// Mock courses data
const forexCoursesData = [
  { "_id": "1", "title": "Beginner's Guide to Trading: Types of Trading (Part 1)", "price": "20", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Master the fundamentals of trading by exploring different trading styles.", "description": "Welcome to your journey into the world of trading.", "reviews": [] },
  { "_id": "2", "title": "Beginner's Guide to Trading: Types of Trading (Part 2)", "price": "30", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Continue your trading education with advanced trading types and hybrid strategies.", "description": "Build upon your foundational knowledge.", "reviews": [] },
  { "_id": "3", "title": "Beginner's Guide to Trading: Types of Trading (Part 3)", "price": "40", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Complete your foundational understanding.", "description": "Conclude your beginner's journey.", "reviews": [] },
  { "_id": "4", "title": "Getting Started: Introduction to Trading Platforms", "price": "50", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Get hands-on experience with industry-standard trading platforms.", "description": "Explore digital tools.", "reviews": [] },
  { "_id": "5", "title": "Trading Strategies: Introduction to Scalp Trading", "price": "60", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Master the art of quick profits.", "description": "Discover scalp trading.", "reviews": [] },
  { "_id": "6", "title": "Trading Strategies: Introduction to Swing Trading", "price": "70", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Capitalize on medium-term price swings.", "description": "Transform your understanding.", "reviews": [] },
  { "_id": "7", "title": "Trading Strategies: Introduction to Intraday Trading", "price": "80", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Master day-to-day trading strategies.", "description": "Enter intraday trading world.", "reviews": [] },
  { "_id": "8", "title": "Trading Strategies: Introduction to Long-Term Trading", "price": "90", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Build wealth through patient investing.", "description": "Discover patience in trading.", "reviews": [] },
  { "_id": "9", "title": "Platform Basics: Introduction to MetaTrader", "price": "100", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Master MetaTrader 4 and 5.", "description": "Learn MetaTrader platform.", "reviews": [] },
  { "_id": "10", "title": "Platform Basics: Introduction to cTrader", "price": "110", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Learn cTrader platform.", "description": "Explore cTrader.", "reviews": [] },
  { "_id": "11", "title": "Platform Basics: Introduction to TradingView", "price": "120", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Master TradingView.", "description": "Discover TradingView platform.", "reviews": [] },
  { "_id": "12", "title": "TradingView Essentials for Beginners", "price": "130", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Get started with TradingView.", "description": "Begin TradingView journey.", "reviews": [] },
  { "_id": "13", "title": "TradingView Mastery: Expert Level", "price": "140", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Unlock advanced TradingView.", "description": "Expert TradingView course.", "reviews": [] },
  { "_id": "14", "title": "TradingView Mastery: Advanced Level", "price": "150", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Advance your TradingView skills.", "description": "Advanced TradingView course.", "reviews": [] },
  { "_id": "15", "title": "Online Trading Safety: How to Spot Scams", "price": "160", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Protect yourself from trading scams.", "description": "Learn trading security.", "reviews": [] },
  { "_id": "16", "title": "Algorithmic Trading: Introduction to Bots (Part 1)", "price": "170", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Discover algorithmic bots.", "description": "Enter automated trading.", "reviews": [] },
  { "_id": "17", "title": "Algorithmic Trading: Introduction to Bots (Part 2)", "price": "180", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Advance your algorithmic knowledge.", "description": "Deepen bot understanding.", "reviews": [] },
  { "_id": "18", "title": "Bot Development: Creating Custom Bots (Part 1)", "price": "190", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Learn to code trading bots.", "description": "Build custom bots.", "reviews": [] },
  { "_id": "19", "title": "Bot Development: Creating Custom Bots (Part 2)", "price": "200", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Master advanced bot development.", "description": "Advanced bot development.", "reviews": [] },
  { "_id": "20", "title": "AI in Trading: Creating AI Bots (Part 1)", "price": "210", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Explore AI in trading.", "description": "AI trading systems.", "reviews": [] },
  { "_id": "21", "title": "AI in Trading: Creating AI Bots (Part 2)", "price": "220", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Develop AI trading systems.", "description": "Advanced AI bots.", "reviews": [] },
  { "_id": "22", "title": "Cryptocurrency Basics: Introduction to Crypto (Part 1)", "price": "230", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Master cryptocurrency fundamentals.", "description": "Crypto basics.", "reviews": [] },
  { "_id": "23", "title": "Cryptocurrency Basics: Introduction to Crypto (Part 2)", "price": "240", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Deepen crypto knowledge.", "description": "Advanced crypto.", "reviews": [] },
  { "_id": "24", "title": "Bitcoin for Beginners: Getting Started", "price": "250", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Start Bitcoin trading journey.", "description": "Bitcoin basics.", "reviews": [] },
  { "_id": "25", "title": "Bitcoin Mastery: Expert Guide", "price": "260", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Become Bitcoin expert.", "description": "Bitcoin mastery.", "reviews": [] },
  { "_id": "26", "title": "Bitcoin Mastery: Advanced Guide", "price": "270", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Perfect Bitcoin trading.", "description": "Advanced Bitcoin.", "reviews": [] },
  { "_id": "27", "title": "Precious Metals: Introduction to Gold (Part 1)", "price": "250", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Discover gold trading.", "description": "Gold basics.", "reviews": [] },
  { "_id": "28", "title": "Precious Metals: Introduction to Gold (Part 2)", "price": "260", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Advance gold trading.", "description": "Advanced gold.", "reviews": [] },
  { "_id": "29", "title": "Gold Trading: Candlesticks & Patterns (Part 1)", "price": "280", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Master candlestick analysis.", "description": "Gold candlesticks.", "reviews": [] },
  { "_id": "30", "title": "Gold Trading: Candlesticks & Patterns (Part 2)", "price": "290", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Advance candlestick mastery.", "description": "Advanced patterns.", "reviews": [] },
  { "_id": "31", "title": "Gold Trading: Candlesticks & Patterns (Part 3)", "price": "300", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Complete candlestick mastery.", "description": "Master patterns.", "reviews": [] },
  { "_id": "32", "title": "Precious Metals: Introduction to Silver (Part 1)", "price": "310", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Enter silver market.", "description": "Silver basics.", "reviews": [] },
  { "_id": "33", "title": "Precious Metals: Introduction to Silver (Part 2)", "price": "320", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Advance silver trading.", "description": "Advanced silver.", "reviews": [] },
  { "_id": "34", "title": "Precious Metals: Introduction to Silver (Part 3)", "price": "330", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Master silver trading.", "description": "Master silver.", "reviews": [] },
  { "_id": "35", "title": "Silver Trading: Candlesticks & Patterns (Part 1)", "price": "340", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Master silver candlesticks.", "description": "Silver candlesticks.", "reviews": [] },
  { "_id": "36", "title": "Silver Trading: Candlesticks & Patterns (Part 2)", "price": "350", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Advance silver candlesticks.", "description": "Advanced silver patterns.", "reviews": [] },
  { "_id": "37", "title": "Silver Trading: Candlesticks & Patterns (Part 3)", "price": "360", "discount": "0", "category": "Forex", "image": "/forexcourse.png", "details": "Master silver patterns.", "description": "Expert silver trading.", "reviews": [] }
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
      return { data: mockCourse };
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
