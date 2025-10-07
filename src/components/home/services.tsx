"use client";

import { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import ServicesClient, { Service } from "./services-client";
import { groq } from "next-sanity";

// Define the GROQ query to fetch all services

// Make this an async Server Component
const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  const servicesQuery = groq`*[_type == "service"]{
        _id,
        title,
        "slug": slug.current,
        description,
        "imageUrl": image.asset->url, 
        "alt": image.alt,             
        color
      }`;
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true);
        setError(null);
        setServices([]);
        const response = await client.fetch(servicesQuery, undefined, {
          cache: "no-cache",
        });

        const data = response;
        setServices(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        console.log(err);
      }
    };
    fetchTeams();
  }, []);

  

  // Pass the fetched data to the Client Component
  return <ServicesClient services={services} />;
};

export default Services;
