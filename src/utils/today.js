export default function today() {
  const Today = new Date();
  const dateString = Today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return dateString;
}
