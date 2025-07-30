// Утилита для правильного формирования путей к изображениям
export const getImagePath = (path: string): string => {
  // Убираем начальный слеш если есть
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // В продакшене добавляем базовый путь для GitHub Pages
  if (import.meta.env.PROD) {
    return `/YourBanK/${cleanPath}`;
  }
  
  // В разработке используем обычный путь
  return `/${cleanPath}`;
}; 