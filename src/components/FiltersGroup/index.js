import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const categoriesList = () => {
    const {categoryOptions, updateCategory} = props
    return categoryOptions.map(eachCategory => {
      const {selectCategoryId} = props
      const isSelectedCategory = eachCategory.categoryId === selectCategoryId
      const selectedCategoryClassName = isSelectedCategory
        ? 'select-category'
        : ''
      const setCategory = () => {
        updateCategory(eachCategory.categoryId)
      }
      return (
        <li
          onClick={setCategory}
          className="li-category"
          key={eachCategory.categoryId}
        >
          <p className={`${selectedCategoryClassName}`}>{eachCategory.name}</p>
        </li>
      )
    })
  }

  const ratingListItems = () => {
    const {ratingsList} = props

    return ratingsList.map(eachRating => {
      const {updateRating} = props

      const selectRating = () => {
        updateRating(eachRating.ratingId)
      }
      return (
        <li
          key={eachRating.ratingId}
          onClick={selectRating}
          className="li-category"
        >
          <img
            className="rating-image"
            src={eachRating.imageUrl}
            alt={`rating-${eachRating.ratingId}`}
          />
        </li>
      )
    })
  }

  const onChangeInputValue = event => {
    const {onChangeValue} = props
    onChangeValue(event.target.value)
  }

  const {onGetSearchValue} = props

  const onEnterKey = event => {
    const {enterSearchKey} = props
    if (event.key === 'Enter') {
      enterSearchKey()
    }
  }

  const onCancelFilter = () => {
    const {onCancelFilterValues} = props
    onCancelFilterValues()
  }

  return (
    <div className="filters-group-container">
      <div className="input-styling">
        <input
          className="input-element"
          onChange={onChangeInputValue}
          onKeyDown={onEnterKey}
          type="search"
          placeholder="search"
          value={onGetSearchValue}
        />
        <BsSearch />
      </div>
      <h1 className="category-heading">Category</h1>
      <ul>{categoriesList()}</ul>
      <ul>{ratingListItems()}</ul>
      <button onClick={onCancelFilter} type="button" className="clear-filter">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
