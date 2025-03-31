export default function Notes({notes}){
    return (
        <>
        
        <section className="mt-10 mb-5">
          
        <p className="font-bold">Additional Notes:</p>
        <p className="lg:w-1/2 text-justify">{notes}</p>

        </section>

        </>
    )
}