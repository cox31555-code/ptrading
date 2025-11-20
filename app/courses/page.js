import ForexPage from "@/ui/forex/ForexPage";
import styles from "./page.module.css";
import CoursesAPI from "@/utils/courses";

const page = async ({ searchParams }) => {
  const params = await searchParams;
  const category = params?.category;
  const priceFrom = params?.priceFrom ? Number(params.priceFrom) : undefined;
  const priceTo = params?.priceTo ? Number(params.priceTo) : undefined;
  const search = params?.search || "";
  const page = params?.page ? Number(params.page) : 1;

  // Fetch all courses (unpaginated) for the "Recommended" section
  let allCoursesData = null;
  try {
    allCoursesData = await CoursesAPI.getAllCourses({
      ...(category && { category }),
    });
  } catch (error) {
    console.error("Error fetching all courses:", error);
    allCoursesData = { data: { data: [] } };
  }

  // Fetch courses with pagination for the main listing
  let coursesData = null;
  try {
    const apiParams = {
      page,
      limit: 12,
      ...(category && { category }),
      ...(priceFrom && { priceFrom }),
      ...(priceTo && { priceTo }),
      ...(search && { search }),
    };

    coursesData = await CoursesAPI.getAllCourses(apiParams);
    console.log(coursesData);
  } catch (error) {
    console.error("Error fetching courses:", error);
    coursesData = { data: { data: [] } };
  }

  // Get price range for the filter
  let priceRange = { min: 0, max: 1000 };
  try {
    priceRange = await CoursesAPI.getPriceRange();
  } catch (error) {
    console.error("Error fetching price range:", error);
  }

  return (
    <div style={{ position: "relative" }}>
      <div className={`${styles.effectWrapper} ${styles.topRight}`}>
        <div className={styles.blueEllipseEffect}></div>
        <img
          src="/svg/salt.svg"
          alt="salt effect"
          className={styles.saltEffectRight}
        />
      </div>

      <div className={`${styles.effectWrapper} ${styles.topLeft}`}>
        <div className={styles.blueEllipseEffect}></div>
      </div>

      <div className={`${styles.effectWrapper} ${styles.bottomLeft}`}>
        <div className={styles.blueEllipseEffect}></div>
      </div>

      <ForexPage
        courses={coursesData?.data?.data || []}
        allCourses={allCoursesData?.data?.data || []}
        category={category}
        priceFrom={priceFrom}
        priceTo={priceTo}
        priceRange={priceRange}
        searchParams={params}
        currentPage={coursesData?.data?.page || 1}
        totalPages={coursesData?.data?.pages || 1}
      />
    </div>
  );
};

export default page;
