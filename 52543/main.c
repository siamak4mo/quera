#include <stdio.h>
#include <stdlib.h> 

struct OI{
	int val;
	int index;
};

struct OI getMax( int arr[], int n )
{
	struct OI mx;
	mx.val = arr[0];
	mx.index = 0;
	if( n == 1 )
		return mx;
	for( int i=1; i<n; i++ ){
		if( arr[i] > mx.val ){
			mx.val = arr[i];
			mx.index = i;
		}
	}
	return mx;
}

struct OI getMin( int arr[], int n )
{
	struct OI mx;
	mx.val = arr[0];
	mx.index = 0;
	if( n == 1 )
		return mx;
	for( int i=1; i<n; i++ ){
		if( arr[i] < mx.val ){
			mx.val = arr[i];
			 mx.index = i;
		}
	}
	return mx;
}

void rm_element( int *array, int pos, int *n)
{
	for( int i = pos; i<*n-1; i++ )
		array[i] = array[i+1];
	array = (int*) realloc( array, 2 );
	*n =  *n-1 ;
}

void DEBUG_print( int arr[] , int len )
{
	int mi = 50;
	if( len < mi )
		mi = len;
	for( int i = 0; i< mi-1 ; i++ )
		printf("%d ", arr[i]);
	printf("%d", arr[mi-1]);
}


int main (void)
{
	int mod = 0;
	int *n = malloc(sizeof(int));
	scanf("%d", n);
	int *arr1 = (int*) malloc((*n)*sizeof(int));
	int sorted[*n];


	for( int i=0; i<*n; i++ ){
		scanf("%d", &arr1[i]);
	}


	int nc  = *n;
	for( int i=0; i<nc; i++ ){
		struct OI oi;
		if( mod == 0 ){
		     	oi = getMax( arr1, *n );
			mod = -1;
		}else{
			oi = getMin( arr1, *n );
			mod = 0;
		}
		sorted[i] = (oi.val);
		rm_element(arr1, oi.index, n);
	}


	DEBUG_print( sorted, nc );
	free(n);
	return 0;
}
