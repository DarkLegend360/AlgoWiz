import Head from "next/head";
import { Nav } from "../components/nav";

import styles from "../styles/sort.module.scss";
import { NAME, SortDefault } from "../config/config";

export default function BubblePage() {
  return (
    <div>
      <Head>
        <title>{NAME} - Algorithm Visualizer</title>
      </Head>
      <Nav />
      <div className={styles.cardDiv}>
        <h1>Welcome to AlgoWiz!</h1>
        <h2>
          An Interactive Web App created by Binsu P Sabu, Goutham Sidhardha,
          Hans Rony and Rajat Jose.
        </h2>
      </div>
      {/* <br/> */}
      <div className={styles.homePageDiv}>
        <h3 style={{ textAlign: "center" }}>
          Here, there are 4 sorting algorithms and 2 searching algorithms. Click
          on the above links to visualize searching and sorting!
        </h3>
        <br />
        <p>The sorting algorithms used are:</p>
        <ul>
          <li>
            <b>Bubble Sort</b>: Bubble sort is a simple sorting algorithm. This sorting
            algorithm is a comparison-based algorithm in which each pair of
            adjacent elements is compared and the elements are swapped if they
            are not in order. However, this algorithm is not suitable for large
            data sets.
          </li>
          <br />
          <li>
          <b>Selection Sort</b>: Selection sort is also a simple sorting algorithm.
            This sorting algorithm is an in-place comparison-based algorithm in
            which the list is divided into two parts, the sorted part at the
            left end and the unsorted part at the right end. Initially, the
            sorted part is empty and the unsorted part is the entire list. The
            smallest element is selected from the unsorted array and swapped
            with the leftmost element, and that element becomes a part of the
            sorted array. This process continues moving unsorted array boundary
            by one element to the right. This algorithm is also not suitable for
            large data sets.
          </li>
          <br />
          <li>
            <b>Insertion Sort</b>: Insertion Sort is an in-place comparison-based sorting
            algorithm. Here, a sub-list is maintained which is always sorted.
            For example, the lower part of an array is maintained to be sorted.
            An element which is to be 'insert'ed in this sorted sub-list, has to
            find its appropriate place and then it has to be inserted there. The
            array is searched sequentially and unsorted items are moved and
            inserted into the sorted sub-list (in the same array). This
            algorithm is also not suitable for large data sets.
          </li>
          <br />
          <li>
            <b>Quick Sort</b>: Quick sort is a highly efficient sorting algorithm and
            is based on partitioning of array of data into smaller arrays. A
            large array is partitioned into two arrays one of which holds values
            smaller than the specified value, say pivot, based on which the
            partition is made and another array holds values greater than the
            pivot value. Quicksort partitions an array and then calls itself
            recursively twice to sort the two resulting subarrays. Unlike the
            above 3 algorithms, this algorithm is quite efficient for
            large-sized data sets.
          </li>
          <br />
        </ul>
        <br />
        <p>The searching algorithms used are:</p>
        <ul>
          <li>
            <b>Linear Search</b>: Linear search is a very simple search algorithm. In
            this type of search, a sequential search is made over all items one
            by one. Every item is checked and if a match is found then that
            particular item is returned, otherwise the search continues till the
            end of the data collection.
          </li>
          <br />

          <li>
            <b>Binary Search</b>: Binary search is a fast search algorithm. This search
            algorithm works on the principle of divide and conquer. For this
            algorithm to work properly, the data collection should be in the
            sorted form. Binary search looks for a particular item by comparing
            the middle most item of the collection. If a match occurs, then the
            index of item is returned. If the middle item is greater than the
            item, then the item is searched in the sub-array to the left of the
            middle item. Otherwise, the item is searched for in the sub-array to
            the right of the middle item. This process continues on the subarray
            as well until the size of the subarray reduces to zero.
          </li>
          <br />
        </ul>
      </div>
      <br />
    </div>
  );
}
