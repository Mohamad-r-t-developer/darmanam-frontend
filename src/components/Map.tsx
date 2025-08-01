/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { PatientAddressValues } from "@/types/patientTypes";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { UseFormSetValue } from "react-hook-form";

// اعلام L برای TypeScript
declare global {
  interface Window {
    L: any;
  }
}

const NESHAN_API_KEY = "web.b02fe766bd6e4afc956797e0ef147f79";
const NESHAN_SERVICE_KEY = "service.14eb0cde052a44fd9f7ea6f5e3b6f470";

export default function Map({ setValue }: { setValue: UseFormSetValue<PatientAddressValues> }) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState<any>(null);
  const [_selectedCoords, setSelectedCoords] = useState<[number, number] | null>(null);
  const markerRef = useRef<any>(null);

  useEffect(() => {
    if (isScriptLoaded && window.L && !mapInstance) {
      const map = new window.L.Map("map", {
        key: NESHAN_API_KEY,
        maptype: "neshan",
        poi: false,
        traffic: false,
        center: [34.642423, 50.880689],
        zoom: 14,
      });

      map.on("click", async (e: any) => {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;

        setSelectedCoords([lat, lng]);
        setValue("lat", lat, {
          shouldValidate: true,
          shouldDirty: true,
        });
        setValue("lng", lng, {
          shouldValidate: true,
          shouldDirty: true,
        });
        // حذف مارکر قبلی
        if (markerRef.current) {
          map.removeLayer(markerRef.current);
        }

        // افزودن مارکر جدید
        const newMarker = window.L.marker([lat, lng]).addTo(map);
        markerRef.current = newMarker;

        // دریافت آدرس
        fetchAddress(lat, lng);
      });

      setMapInstance(map);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScriptLoaded, mapInstance]);

  const fetchAddress = async (lat: number, lng: number) => {
    console.log(lat, lng);
    try {
      const res = await fetch(`https://api.neshan.org/v5/reverse?lat=${lat}&lng=${lng}`, {
        headers: {
          "Api-Key": NESHAN_SERVICE_KEY,
        },
      });

      if (!res.ok) throw new Error("خطا در دریافت آدرس");

      const data = await res.json();
      setValue("fullAddress", data.formatted_address, {
        shouldValidate: true,
        shouldDirty: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const goToUserLocation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!navigator.geolocation) {
      alert("مرورگر شما از موقعیت مکانی پشتیبانی نمی‌کند.");
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      if (mapInstance) {
        mapInstance.setView([latitude, longitude], 16);

        if (markerRef.current) {
          mapInstance.removeLayer(markerRef.current);
        }

        const userMarker = window.L.marker([latitude, longitude]).addTo(mapInstance);
        markerRef.current = userMarker;
        setSelectedCoords([latitude, longitude]);

        fetchAddress(latitude, longitude); // ← گرفتن آدرس
      }
    });
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://static.neshan.org/sdk/leaflet/v1.9.4/neshan-sdk/v1.0.8/index.css"
      />
      <Script
        src="https://static.neshan.org/sdk/leaflet/v1.9.4/neshan-sdk/v1.0.8/index.js"
        strategy="afterInteractive"
        onLoad={() => setIsScriptLoaded(true)}
      />

      <div className="relative w-full h-[400px]">
        <div id="map" className="w-full h-full rounded-lg overflow-hidden" />

        <button
          onClick={goToUserLocation}
          className="absolute bottom-4 right-4 z-[1000] bg-white shadow-md px-3 py-1 text-sm rounded-lg border hover:bg-gray-100 transition"
        >
          موقعیت من
        </button>
      </div>
    </>
  );
}
