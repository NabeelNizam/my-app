import styles from "../../pages/produk/produk.module.scss";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const DEFAULT_TRANSITION_MS = 250;
const REDUCED_MOTION_TRANSITION_MS = 400;

const TampilanProduk = ({
  products,
  loading,
}: {
  products: ProductType[];
  loading: boolean;
}) => {
  const [showSkeletonLayer, setShowSkeletonLayer] = useState(loading);
  const [showProductLayer, setShowProductLayer] = useState(!loading);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [transitionMs, setTransitionMs] = useState(DEFAULT_TRANSITION_MS);

  const prevLoadingRef = useRef(loading);
  const hideSkeletonTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const skeletonCount = products.length > 0 ? products.length : 4;

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQueryList = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = (matches: boolean) => {
      setIsReducedMotion(matches);
      setTransitionMs(
        matches ? REDUCED_MOTION_TRANSITION_MS : DEFAULT_TRANSITION_MS,
      );
    };

    syncMotionPreference(mediaQueryList.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      syncMotionPreference(event.matches);
    };

    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (hideSkeletonTimerRef.current) {
      clearTimeout(hideSkeletonTimerRef.current);
      hideSkeletonTimerRef.current = null;
    }

    if (loading) {
      setShowSkeletonLayer(true);
      setShowProductLayer(false);
      prevLoadingRef.current = true;
      return;
    }

    setShowProductLayer(true);

    if (prevLoadingRef.current) {
      setShowSkeletonLayer(true);
      hideSkeletonTimerRef.current = setTimeout(() => {
        setShowSkeletonLayer(false);
        hideSkeletonTimerRef.current = null;
      }, transitionMs);
    } else {
      setShowSkeletonLayer(false);
    }

    prevLoadingRef.current = false;
  }, [loading, transitionMs]);

  useEffect(() => {
    return () => {
      if (hideSkeletonTimerRef.current) {
        clearTimeout(hideSkeletonTimerRef.current);
      }
    };
  }, []);

  const contentStyle: CSSProperties & Record<"--transition-ms", string> = {
    "--transition-ms": `${
      isReducedMotion ? REDUCED_MOTION_TRANSITION_MS : transitionMs
    }ms`,
  };

  const skeletonLayerClassName = [
    styles.produk__content__layer,
    styles.produk__content__layerSkeleton,
    loading
      ? styles.produk__content__layerVisible
      : styles.produk__content__layerHidden,
  ].join(" ");

  const productLayerClassName = [
    styles.produk__content__layer,
    styles.produk__content__layerProduct,
    showProductLayer
      ? styles.produk__content__layerVisible
      : styles.produk__content__layerHidden,
  ].join(" ");

  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>
      <div className={styles.produk__content} style={contentStyle}>
        {showSkeletonLayer && (
          <div className={skeletonLayerClassName} aria-hidden={!loading}>
            {Array.from({ length: skeletonCount }).map((_, index) => (
              <div key={index} className={styles.produk__content__skeleton}>
                <div className={styles.produk__content__skeleton__image}></div>
                <div className={styles.produk__content__skeleton__name}></div>
                <div
                  className={styles.produk__content__skeleton__category}
                ></div>
                <div className={styles.produk__content__skeleton__price}></div>
              </div>
            ))}
          </div>
        )}

        <div className={productLayerClassName} aria-hidden={!showProductLayer}>
          {products.map((product: ProductType) => (
            <div key={product.id} className={styles.produk__content__item}>
              <div className={styles.produk__content__item__image}>
                <img src={product.image} alt={product.name} width={200} />
              </div>
              <h4 className={styles.produk__content__item__name}>
                {product.name}
              </h4>
              <p className={styles.produk__content__item__category}>
                {product.category}
              </p>
              <p className={styles.produk__content__item__price}>
                Rp {product.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TampilanProduk;
