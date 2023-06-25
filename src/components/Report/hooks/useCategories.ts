import useStore from '@/store';
import { useMemo } from 'react';

const useCategories = () => {
  const report = useStore(store => store.report);

  const categories = useMemo(() => {
    if (!report) return [];
    return report.categories
      .sort((a,b) => a.position - b.position)
      .map((category) => {
        return {
          category,
          sections: report.sections.filter(el => el.category === category.id)
        };
      });

  }, [report]);

  return categories;
};

export default useCategories;
