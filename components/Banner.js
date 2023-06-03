
import Link from "next/link";

const Banner = () => {
  return (
    <div>
      <p>
        Get 20% off your first purchase.{" "}
        <Link href="/cart">
          <h1>Shop Now</h1>
        </Link>
      </p>
    </div>
  );
};

export default Banner;
