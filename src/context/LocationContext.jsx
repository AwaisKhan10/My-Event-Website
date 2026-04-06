import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "bme-preferred-city";
const DEFAULT_CITY = "Karachi";

const LocationContext = createContext(null);

async function fetchCityFromIp() {
  const res = await fetch("https://ipwho.is/");
  if (!res.ok) throw new Error("geo failed");
  const data = await res.json();
  if (data.success === false) throw new Error(data.message || "geo failed");
  const city = typeof data.city === "string" ? data.city.trim() : "";
  if (!city) throw new Error("no city");
  return city;
}

export function LocationProvider({ children }) {
  const [preferredCity, setPreferredCityState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved && saved.length > 0 ? saved : DEFAULT_CITY;
    } catch {
      return DEFAULT_CITY;
    }
  });

  const [detecting, setDetecting] = useState(false);
  const [geoError, setGeoError] = useState(null);

  const setPreferredCity = useCallback((city) => {
    const next = city?.trim() || DEFAULT_CITY;
    setPreferredCityState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }

    (async () => {
      setDetecting(true);
      setGeoError(null);
      try {
        const city = await fetchCityFromIp();
        if (cancelled) return;
        setPreferredCityState(city);
        try {
          localStorage.setItem(STORAGE_KEY, city);
        } catch {
          /* ignore */
        }
      } catch {
        if (!cancelled) {
          setGeoError("Could not detect city");
        }
      } finally {
        if (!cancelled) setDetecting(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(
    () => ({
      preferredCity,
      setPreferredCity,
      detecting,
      geoError,
    }),
    [preferredCity, setPreferredCity, detecting, geoError]
  );

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
}

export function useUserLocation() {
  const ctx = useContext(LocationContext);
  if (!ctx) {
    throw new Error("useUserLocation must be used within LocationProvider");
  }
  return ctx;
}
