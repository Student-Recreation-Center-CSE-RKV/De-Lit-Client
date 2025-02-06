export async function getData(functionName) {
  try {
    const res = await fetch(`${process.env.API_ENDPOINT}/${functionName}`, {
      next: { revalidate: 30 },
    });
    let data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching data from API", error);
  }
}
