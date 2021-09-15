import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import AddQaModal from "./AddQaModal";
import EditQaModal from "./EditQaModal";

const ReplyedModal = ({ setModalVisible, modalVisible }) => {
  const [addQaOPen, setAddQaOpen] = useState(false);
  const [editQaOPen, setEditQaOpen] = useState(false);

  return (
    <div>
      <Modal
        open={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
        center
        styles={{
          modal: {
            border: "1px solid  gray",
            borderRadius: "8px",
            maxWidth: "700px",
            width: "50%",
          },
        }}
        focusTrapped={true}
      >
        <div className="px-4 pt-6 pb-4 md:pb-7 md:px-8">
          <h6 className="ml-4 mt-0 mb-1 font-black text-2xl text-center">
            Reply for #ID#
          </h6>
          <hr></hr>

          <div className="  mt-4">
            <div
              className="mt-4  shadow-md bg-blueSapphire rounded-xl px-3 py-1 overflow-y-auto"
              style={{ maxHeight: "300px" }}
            >
              <div className="bg-lightSilver rounded-xl  my-2 ">
                <div className="py-2 px-2 font-black">
                  Do you sell audiobooks and / or ebooks?
                </div>

                <hr></hr>

                <div
                  className="py-2 px-2 overflow-y-auto"
                  style={{ maxHeight: "100px" }}
                >
                  Both ebooks and audiobooks are available via distribution
                  partnerships with Hummingbird / My Must Reads (ebooks) and
                  Libro.FM (audiobooks). When available, you can see both ebook
                  and audiobook links on any book product page. Both ebooks and
                  audiobooks are available via distribution partnerships with
                  Hummingbird / My Must Reads (ebooks) and Libro.FM
                  (audiobooks). When available, you can see both ebook and
                  audiobook links on any book product page.Both ebooks and
                  audiobooks are available via distribution partnerships with
                  Hummingbird / My Must Reads (ebooks) and Libro.FM
                  (audiobooks). When available, you can see both ebook and
                  audiobook links on any book product page.
                </div>

                <hr></hr>

                <div className="text-right py-2 px-2">Date</div>
              </div>

              <div className="bg-lightSilver rounded-xl  my-2 ">
                <div className="py-2 px-2 font-black">
                  Do you sell audiobooks and / or ebooks?
                </div>

                <hr></hr>

                <div
                  className="py-2 px-2 overflow-y-auto"
                  style={{ maxHeight: "100px" }}
                >
                  Both ebooks and audiobooks are available via distribution
                  partnerships with Hummingbird / My Must Reads (ebooks) and
                  Libro.FM (audiobooks). When available, you can see both ebook
                  and audiobook links on any book product page. Both ebooks and
                  audiobooks are available via distribution partnerships with
                  Hummingbird / My Must Reads (ebooks) and Libro.FM
                  (audiobooks). When available, you can see both ebook and
                  audiobook links on any book product page.Both ebooks and
                  audiobooks are available via distribution partnerships with
                  Hummingbird / My Must Reads (ebooks) and Libro.FM
                  (audiobooks). When available, you can see both ebook and
                  audiobook links on any book product page.
                </div>

                <hr></hr>

                <div className="text-right py-2 px-2">Date</div>
              </div>

              <div className="bg-lightSilver rounded-xl  my-2 ">
                <div className="py-2 px-2 font-black">
                  Do you sell audiobooks and / or ebooks?
                </div>

                <hr></hr>

                <div
                  className="py-2 px-2 overflow-y-auto"
                  style={{ maxHeight: "100px" }}
                >
                  Both ebooks and audiobooks are available via distribution
                  partnerships with Hummingbird / My Must Reads (ebooks) and
                  Libro.FM (audiobooks). When available, you can see both ebook
                  and audiobook links on any book product page. Both ebooks and
                  audiobooks are available via distribution partnerships with
                  Hummingbird / My Must Reads (ebooks) and Libro.FM
                  (audiobooks). When available, you can see both ebook and
                  audiobook links on any book product page.Both ebooks and
                  audiobooks are available via distribution partnerships with
                  Hummingbird / My Must Reads (ebooks) and Libro.FM
                  (audiobooks). When available, you can see both ebook and
                  audiobook links on any book product page.
                </div>

                <hr></hr>
                <div className="text-right py-2 px-2">Date</div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {addQaOPen && (
        <AddQaModal modalVisible={addQaOPen} setModalVisible={setAddQaOpen} />
      )}
      {editQaOPen && (
        <EditQaModal
          modalVisible={editQaOPen}
          setModalVisible={setEditQaOpen}
        />
      )}
    </div>
  );
};

export default ReplyedModal;
