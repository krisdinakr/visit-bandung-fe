import { FC } from 'react';

interface SelectProps {
  variant: 'category' | 'subCategory';
  category?: string;
  subCategory?: string;
  onChange: (e: any) => void;
}

export const Select: FC<SelectProps> = ({
  variant,
  category,
  subCategory,
  onChange,
}) => {
  const CATEGORIES = [
    {
      name: 'ATTRACTIONS',
      subCategory: [
        'LANDMARKS',
        'MUSEUMS',
        'RECREATIONS',
        'SPECIALITY MUSEUMS',
        'THEME PARKS',
        'ZOO',
      ],
    },
    {
      name: 'CULTURE & ART',
      subCategory: ['GALLERY', 'PERFORMING ARTS'],
    },
    {
      name: 'SHOPPING',
      subCategory: ['MALL & DEPARTMENT STORES', 'LOCAL PRODUCTS'],
    },
    {
      name: 'NATURE',
      subCategory: ['PARKS', 'WATERFALL', 'BOTANICAL GARDEN'],
    },
    {
      name: 'CULINARY',
      subCategory: ['STREET FOODS', 'LOCAL FOODS'],
    },
    {
      name: 'HISTORY',
      subCategory: ['HISTORICAL SITES', 'STATUES & MONUMENTS'],
    },
  ];

  const renderOptions = () => {
    const subCategories = CATEGORIES.find(
      (item) => item.name === category
    )?.subCategory;
    return subCategories?.map((sub) => (
      <option key={sub} value={sub}>
        {sub}
      </option>
    ));
  };

  if (variant === 'category')
    return (
      <select
        className="form-select"
        aria-label="Category Field"
        value={category}
        onChange={onChange}
      >
        <option value="" disabled>
          Select Category
        </option>
        {CATEGORIES.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    );

  return (
    <select
      className="form-select"
      aria-label="Sub Category Field"
      value={subCategory}
      onChange={onChange}
    >
      <option value="">Select Sub Category</option>
      {renderOptions()}
    </select>
  );
};
