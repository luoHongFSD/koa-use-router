import KoaRouter from "koa-router";
import compose from "koa-compose";




export default function useRouter(){
  
   function createRouter(options={}){
       const router = new KoaRouter(options) 
       return router
   }

   function group(router,rootRoutes){
      rootRoutes.forEach((route)=>{
        router.use(route.routes())
      })
   }

   function mount(router){
     return compose([router.routes(),router.allowedMethods()])
   }
    
   return {
    createRouter,
    group,
    mount
   }
}







 