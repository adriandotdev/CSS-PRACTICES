# CSS-PRACTICES
A repository that contains all the projects that used CSS. It includes the recap of the fundamentals of CSS.

# Flexbox

## What I learned?
- Flexbox can be used to align elements horizontally or vertically.
- Some of the properties of flexbox are:
  - `justify-content`
  will align the items into its main axis. 
  - `align-items` will align the items in cross axis.
  - `align-self` aligns the specified flex-item.


# Grid

## What I learned?

- Grid is a layout that positions elements in a horizontal or vertical axis.
- Grid has a grid-specified unit `fr` that stands for a fraction of each column.
- To make an efficient grid layout, you can use `grid-template area` that positions  the element to a specified spots.
- Example: 

```
grid-template-area: 
'header header header header'
'section1 section1 section1 sidebar'
'footer' 'footer' 'footer' 'footer'
```

then you can assign an area to each element

```
header {
    grid-area: header; 
}
```

NOTE: If you are assigning the area, it is not in a STRING.

