import Spinner from "./Spinner";
import styles from "./CityList.module.css";

const CityList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  return <ul className={styles.cityList}></ul>;
};
export default CityList;
