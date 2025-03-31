import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Notes from "./components/Notes";
import Dates from "./components/Dates";
import ClientDetails from "./components/ClientDetails";
import MainDetails from "./components/MainDetails";
import TableForm from "./components/TableForm";
import ReactToPrint from "react-to-print";

function App() {
const[showinvoice, setShowInvoice] = useState(false)
const[name, setName] = useState("")
const[address, setAddress] = useState("")
const[email, setEmail] = useState("")
const[phone, setPhone] = useState("")
const[bankName, setBankName] = useState("")
const[bankAccount, setBankAccount] = useState("")
const[accountHolder, setAccountHolder] = useState("")
const[website, setWebsite] = useState("")
const[clientName, setClientName] = useState("")
const[clientAddress, setClientAddress] = useState("")
const[invoiceNumber, setInvoiceNumber] = useState("")
const[invoiceDate, setInvoiceDate] = useState("")
const[dueDate, setDueDate] = useState("")
const[notes, setNotes] = useState("")

const[description, setDescription] = useState("")
const[quantity,setQuantity] = useState("")
const[price,setPrice] = useState("")
const[amount, setAmount] = useState("")

const[list,setList] = useState([])

const[total, setTotal] = useState(0)

  const handlePrint = () => {
    window.print()
  }
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl bg-white xl:max-w-4xl rounded shadow">
         
        {showinvoice ? <div>

          <Header handlePrint={handlePrint}/>

          <MainDetails name={name} address={address}/>

          <ClientDetails clientName={clientName} clientAddress={clientAddress}/>

          <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate}/>

          <Table 
          description={description} 
          quantity={quantity} 
          price={price} 
          amount={amount}
          list={list}
          setList={setList}
          total={total}
          setTotal={setTotal}/>

          <Notes notes={notes}/>

          <Footer 
          name={name} 
          address={address} 
          website={website} 
          email={email}
          phone={phone}
          bankAccount={bankAccount}
          bankName={bankName}
          accountHolder={accountHolder}
          /> 

          <button onClick={() => setShowInvoice(false)}className="mt-5 bg-blue-500 text-white
            font-bold py-2 px-8 rounded shadow
            border-2 border-blue-500
            hover:bg-transparent hover:text-blue-500
            transition-all duration-300">Edit Information</button>

          </div> : (
            <>
            {/*name, address, email, phone, bank name,
            bank account number, website, client's name, client's address
            invoice number, invoice date, due date, notes*/}
              <div className="flex flex-col justify-center">

            <article className="md:grid grid-cols-2 gap-10">
            <div className="flex flex-col">
            <label htmlFor="name">Enter Your Name</label>
              <input 
                type="text"
                name="text" 
                id="name" 
                placeholder="Enter Your Name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </div>

            <div className="flex flex-col">
            <label htmlFor="address">Enter Your Address</label>
              <input 
                type="text"
                name="address" 
                id="address" 
                placeholder="Enter Your Address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            </div>
            </article>

             <article className="md:grid grid-cols-3 gap-10">
             <div className="flex flex-col">
             <label htmlFor="email">Enter Your Email</label>
              <input 
                type="email"
                name="email" 
                id="email" 
                placeholder="Enter Your Email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
             </div>

            <div className="flex flex-col">
            <label htmlFor="website">Enter Your Website</label>
              <input 
                type="url"
                name="website" 
                id="website" 
                placeholder="Enter Your Website"
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
            />
            </div>

            <div className="flex flex-col">
            <label htmlFor="phone">Enter Your Phone Number</label>
              <input 
                type="tel"
                name="phone" 
                id="phone"
                pattern="[0-9]{10}" 
                placeholder="Enter Your Phone"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            </div>
             </article>

            <article className="md:grid grid-cols-3 gap-10">
            <div className="flex flex-col">
            <label htmlFor="bankName">Enter Bank Name</label>
              <input 
                type="text"
                name="bankName" 
                id="bankName" 
                placeholder="Enter Bank Name"
                autoComplete="off"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
            />
            </div>

            <div className="flex flex-col">
            <label htmlFor="bankAccount">Enter Account Number</label>
              <input 
                type="text"
                name="bankAccount" 
                id="bankAccount" 
                pattern="\d{9,18}"
                maxlength="18"
                placeholder="Enter Account Number"
                autoComplete="off"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
            />
            </div>

            <div className="flex flex-col">
            <label htmlFor="accountHolder">Enter Account Holder Name</label>
              <input 
                type="text"
                name="accountHolder" 
                id="accountHolder" 
                pattern="\d{9,18}"
                maxlength="18"
                placeholder="Enter Account Holder Name"
                autoComplete="off"
                value={accountHolder}
                onChange={(e) => setAccountHolder(e.target.value)}
            />
            </div>
            </article>

            <article className="md:grid grid-cols-2 gap-10 md:mt-20">
            <div className="flex flex-col">
            <label htmlFor="clientName">Enter Client's Name</label>
              <input 
                type="text"
                name="clientName" 
                id="clientName" 
                placeholder="Enter Client's Name"
                autoComplete="off"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
            />
            </div>

            <div className="flex flex-col">
            <label htmlFor="clientAddress">Enter Client's Address</label>
              <input 
                type="text"
                name="clientAddress" 
                id="clientAddress" 
                placeholder="Enter Client's Address"
                autoComplete="off"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
            />
            </div>
            </article>

            <article className="md:grid grid-cols-3 gap-10">
            <div className="flex flex-col">
            <label htmlFor="invoiceNumber">Invoice Number</label>
              <input 
                type="text"
                name="invoiceNumber" 
                id="invoiceNumber" 
                placeholder="Invoice Number"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
            />
            </div>

            <div className="flex flex-col">
            <label htmlFor="invoiceDate">Invoice Date</label>
              <input 
                type="date"
                name="invoiceDate" 
                id="invoiceDate" 
                placeholder="Invoice Date"
                autoComplete="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
            />
            </div>

            <div className="flex flex-col">
            <label htmlFor="dueDate">Due Date</label>
              <input 
                type="date"
                name="dueDate" 
                id="dueDate" 
                placeholder="Due Date"
                autoComplete="off"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            </div>
            </article>

            {/* This is our Table */}
            <article>
              <TableForm description={description} 
              setDescription={setDescription}
              
              quantity={quantity}
              setQuantity={setQuantity}
              
              price={price}
              setPrice={setPrice}
              
              amount={amount}
              setAmount={setAmount}
              
              list={list}
              setList={setList}
              
              total={total}
              setTotal={setTotal}/>
            </article>

            <label htmlFor="notes">Additional Notes</label>
            <textarea name="notes" id="notes" cols={30} rows={5}
            placeholder="Additional Notes to the Client "value={notes} onChange={(e) => setNotes(e.target.value)}>
            </textarea>
            
            <button onClick={() => setShowInvoice(true)}className="mt-5 bg-blue-500 text-white
            font-bold py-2 px-8 rounded shadow
            border-2 border-blue-500
            hover:bg-transparent hover:text-blue-500
            transition-all duration-300">Preview Invoice</button>
              </div>

            </>
          )}

      </main>
    </>
  );
}

export default App;
