
export default function Docs(
    {
        params,
    }:{
        params:{
            slug:string[];
        };
    }
) {
    if(1<2){
        return (
            <h1>Hello rumba</h1>
        )
    }
  return (
    // if(params.slug.length === 2)
    <div>Docs Home page {params.slug[1]}</div>
  )
}
