import React, { useState } from 'react'
import items from './data'
import Categories from './components/Categories';
import Menu from './components/Menu'

const allCategories = [ 'all', ... new Set(items.map(item => item.category))]
console.log(allCategories)
function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  //过滤
  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(items);
      return
    }
    const newItems = items.filter((item) => {
       return item.category === category
    })
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>美食美客菜单</h2>
          <div className="underline"></div>
            <Categories filterItems= {filterItems} categories={categories}/>
            <Menu items = { menuItems }/>
          </div>
      </section>
    </main>
  );
}

export default App;
