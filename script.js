function mincost(arr)
{ 
heapq.heapify(arr)
    
    total_cost = 0
    
    
    while len(arr) > 1:
        first = heapq.heappop(arr)  # Smallest
        second = heapq.heappop(arr)  # Second smallest
        cost = first + second
        total_cost += cost
        heapq.heappush(arr, cost)  # Push the combined rope back into the heap
    
    return total_cost
  
}

module.exports=mincost;
