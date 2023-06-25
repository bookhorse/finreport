import styles from '../styles.module.scss';
import Category from './Category';
import Section from './Section';
import useStore from '@/store';
import useCategories from '../hooks/useCategories';

const SideBar = () => {
  const [expandedCategories, toggleCategory] = useStore(store => [store.expandedCategories, store.toggleCategory]);
  const categories = useCategories();

  const renderedItems = categories.map(({category, sections}) => {
    const {id, name, type} = category;
    return(
      <Category
        key={id}
        title={name}
        calculated={type !== 'data'}
        expanded={expandedCategories.includes(id)}
        onClick={() => toggleCategory(id)}
      >
        {sections.map(el => <Section key={el.id} title={el.name} />)}
      </Category>
    );
  });


  return (
    <div className={styles.sidebar}>
      <div className={styles.sideHeader}>Finacnial Report</div>
      { renderedItems }
    </div>
  );
};

export default SideBar;
