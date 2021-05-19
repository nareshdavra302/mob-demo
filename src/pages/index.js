import React, { useState } from 'react';
import { encodeData, decodeData, converttoTxnArray, convertEncodedString } from '../libs/mob';

const IndexPage = () => {
  const [plainTextIn, setPlainTextIn] = useState('');
  const [encodedTextOut, setEncodedTextOut] = useState('');
  const [txnArrayOut, setTxnArrayOut] = useState([]);


  const [txnArrayStr, setTxnArrayStr] = useState('');
  const [txnArrayIn, setTxnArrayIn] = useState([]);
  const [encodedTextIn, setEncodedTextIn] = useState('');
  const [plainTextOut, setPlainTextOut] = useState('');

  const onEncode = (data) => {
    setPlainTextIn(data);
    // if (!data) return;
    onEncodeOut(data)
  }

  const onEncodeOut = (data) => {
    const d = encodeData(data);
    setEncodedTextOut(d);
    
    const txns = converttoTxnArray(d);
    setTxnArrayOut(txns);
  }

  const onDecodeTxn = (txnArrStr) => {
    console.log('sd',)

    setTxnArrayStr(txnArrStr);
    const txnArray = txnArrStr.split('\n')
    setTxnArrayIn(txnArray);

    // if (!txnArray) return;
    const encStr = convertEncodedString(txnArray)
    onDecode(encStr);
  }
  const onDecode = (encData) => {
    setEncodedTextIn(encData);
    if (!encData) return;
    const d = decodeData(encData);
    setPlainTextOut(d);
  }
  return (


    <main>
      <div className="app min-h-screen min-v-screen p-8 bg-grey-lightest font-sans">
        <div className="row sm:flex">
          <div className="col sm:w-1/2">
            <div className="box border rounded flex flex-col shadow bg-white">
              <div className="box__title bg-grey-lighter px-3 py-2 border-b"><h3 className="text-sm text-grey-darker font-medium">Plain Text</h3></div>
              <textarea className="text-grey-darkest flex-1 p-2 m-1 bg-transparent" value={plainTextIn} onChange={e => onEncode(e.target.value)} ></textarea>
            </div>
            <br />
            <div className="box border rounded flex flex-col shadow bg-white">
              <div className="box__title bg-grey-lighter px-3 py-2 border-b"><h3 className="text-sm text-grey-darker font-medium">Ecoded Text</h3></div>
              <textarea className="text-grey-darkest flex-1 p-2 m-1 bg-transparent" value={encodedTextOut} onChange={e => onEncode(e.target.value)}></textarea>
            </div>
            <br />
            <div className="box border rounded flex flex-col shadow bg-white">
              <div className="box__title bg-grey-lighter px-3 py-2 border-b"><h3 className="text-sm text-grey-darker font-medium">Transactions</h3></div>
              <div className="text-grey-darkest flex-1 p-2 m-1 bg-transparent">{txnArrayOut.map((tx => <ul key={tx}>{tx}</ul>))}</div>
            </div>

          </div>

          <div className="col mt-8 sm:ml-8 sm:mt-0 sm:w-1/2">
            <div className="box border rounded flex flex-col shadow bg-white">
              <div className="box__title bg-grey-lighter px-3 py-2 border-b"><h3 className="text-sm text-grey-darker font-medium">Transactions</h3></div>
              <textarea className="text-grey-darkest flex-1 p-2 m-1 bg-transparent" value={txnArrayStr} onChange={e => onDecodeTxn(e.target.value)}></textarea>
            </div>
            <br />
            <div className="box border rounded flex flex-col shadow bg-white">
              <div className="box__title bg-grey-lighter px-3 py-2 border-b"><h3 className="text-sm text-grey-darker font-medium">Ecoded Text</h3></div>
              <textarea className="text-grey-darkest flex-1 p-2 m-1 bg-transparent" value={encodedTextIn} onChange={e => onDecode(e.target.value)}></textarea>
            </div>
            <br />
            <div className="box border rounded flex flex-col shadow bg-white">
              <div className="box__title bg-grey-lighter px-3 py-2 border-b"><h3 className="text-sm text-grey-darker font-medium">Plain Text</h3></div>
              <textarea placeholder="hey" className="text-grey-darkest flex-1 p-2 m-1 bg-transparent" value={plainTextOut} onChange={e => setPlainTextOut(e.target.value)} ></textarea>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default IndexPage

