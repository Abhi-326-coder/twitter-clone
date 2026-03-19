import {useMutation, useQueryClient} from '@tanstack/react-query';
import toast from 'react-hot-toast';


// @tanstack/react-query is mainly used while fetching the data  
const useFollow = ()=>{
    const queryClient = useQueryClient(); // to invalidate some queries 
    
    const { mutate:follow, isPending} = useMutation({
        mutationFn:async (userId) =>{
            try {
                const res = await fetch(`/api/users/follow/${userId}`,{
                    method:'POST',
                })

                const data = await res.json();
                if(!res.ok){
                    throw new Error(data.message || 'Something went wrong');
                }
                return data;
            } catch (error) {
                throw new Error(error.message)
            }
        },
        onSuccess:()=>{}
    })

}

export default useFollow; 