const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

const blogs = async () => {
  try {
    const res = await fetch(`${API_URL}/api/blogs?populate=*`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      next: {
      revalidate: 30, // ⏱ ISR: Regenerate the page every 60 seconds
    },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data?.data || [];
  } catch (error) {
    return [];
  }
};

export default blogs;
