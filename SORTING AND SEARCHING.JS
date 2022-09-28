
function insertionSort(arr, n)
{
	let i, key, j;
	for (i = 1; i < n; i++)
	{
		key = arr[i];
		j = i - 1;
	
		/* Move elements of arr[0..i-1], that are
		greater than ref, to one position ahead
		of their current position */
		while (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}
	

	let arr = [12, 10, 15, 25, 5, 8, 0, 6 ];
	let n = arr.length;
	
	insertionSort(arr, n);
    console.log(arr)
	
	
