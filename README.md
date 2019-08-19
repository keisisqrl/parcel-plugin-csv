# parcel-plugin-csv

Implements a CSV asset type for Parcel

Assumes that the first line is headers and imports the csv contents
as an array of objects. So for example:

```csv
file,format,size
photo.png,png,22913
blag,txt,239
```

Gives you:

```json
[
  {
    "file": "photo.png",
    "format": "png",
    "size": "22913"
  },
  {
    "file": "blag",
    "format": "txt",
    "size": "239"
  }
]
```
