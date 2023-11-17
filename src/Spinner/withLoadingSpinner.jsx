import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { data } from "../components/auth/firebase/Firebase";

const withLoadingSpinner = (WrappedComponent, firebase) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);

          // Fetch data from Firebase
          const firebaseData = await data.fetchData();

          // Collect all image, video, and iframe URLs
          const allUrls = [];

          // Handle local assets
          const assetsContext = require.context(
            "../../src/assets/",
            false,
            /\.(png|jpg|jpeg|gif|mp4|webm)$/
          );
          const localFiles = assetsContext.keys().map((file) => {
            const path = assetsContext(file).default;
            if (path.endsWith(".png") || path.endsWith(".jpg") || path.endsWith(".jpeg") || path.endsWith(".gif") || path.endsWith(".mp4") || path.endsWith(".webm")) {
              allUrls.push(path);
            }
            return path;
          });

          // Handle image and video URLs from Firebase
          const firebaseFiles = Object.values(firebaseData).map((item) => {
            if (item.type === "image" || item.type === "video") {
              allUrls.push(item.url);
            }
            return item.url;
          });

          // Handle iframe URLs from Firebase
          const firebaseIframes = Object.values(firebaseData).map((item) => {
            if (item.type === "iframe") {
              allUrls.push(item.src);
            }
            return item.src;
          });

          // Load all URLs
          const filePromises = allUrls.map((url) => {
            return new Promise((resolve, reject) => {
              if (url.endsWith(".png") || url.endsWith(".jpg") || url.endsWith(".jpeg") || url.endsWith(".gif")) {
                const img = new Image();
                img.onload = resolve;
                img.onerror = reject;
                img.src = url;
              } else if (url.endsWith(".mp4") || url.endsWith(".webm")) {
                const video = document.createElement("video");
                video.onloadeddata = resolve;
                video.onerror = reject;
                video.src = url;
                document.body.appendChild(video);
              } else if (url.endsWith(".html")) { // Assuming iframe URLs end with .html
                const iframe = document.createElement("iframe");
                iframe.onload = resolve;
                iframe.onerror = reject;
                iframe.src = url;
                document.body.appendChild(iframe);
              } else {
                resolve(); // Skip non-supported URLs
              }
            });
          });

          // Wait for all promises to resolve
          await Promise.all([...filePromises]);

        } catch (error) {
          console.error("Error fetching data or loading files:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [firebase]);

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoading(false);
        }
      });
    };

    useEffect(() => {
      const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Adjust this threshold as needed
      });

      // Select all images in the document
      const images = document.querySelectorAll("img");

      // Observe each image
      images.forEach((img) => {
        observer.observe(img);
      });

      return () => {
        // Cleanup: disconnect the observer when the component unmounts
        observer.disconnect();
      };
    }, []);

    return (
      <div>
        {loading ? <LoadingSpinner /> : <WrappedComponent {...props} />}
      </div>
    );
  };
};

export default withLoadingSpinner;