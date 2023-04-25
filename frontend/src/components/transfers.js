import React from 'react'
import "./css/transfers.css"
export default function transfers() {
  return (
    <div id="transfers">
  <div className="transfer-elements-container">
    <div className="transfer-elements">
      <h5 className="header-transfers">File Transfers</h5>
      <div className="download-transfers">
        <h6 className="text download-text">Downloads</h6>
        <div className="download-transfers-table-container">
          <table className="download-transfers-table">
          </table>
        </div>
      </div>
      <div className="upload-transfers">
        <h6 className="text upload-text">Uploads/Seeding</h6>
        <div className="upload-transfers-table-container">
          <table className="upload-transfers-table">
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
