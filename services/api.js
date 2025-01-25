
export async function getData(functionName) {
  const res = await fetch(`${process.env.API_ENDPOINT}/${functionName}/`, {
    next: { revalidate: 30 }
  });
  let data = await res.json();
  return data;
}