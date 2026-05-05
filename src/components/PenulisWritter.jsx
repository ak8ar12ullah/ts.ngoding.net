import { Badge } from "@astrojs/starlight/components";

import { authors } from "../../author.config";

export default function MarketplacePreview({ waktu, author }) {
  const datas = authors[author];

  if (!datas)
    return (
      <p>
        <span style={{ color: "var(--sl-color-accent)" }}>
          Penulis tidak ditemukan
        </span>
      </p>
    );

  return (
    <>
      <div
        style={{
          display: "flex",
          // marginTop: "-10px",
          alignItems: "center",
          gap: "15px",
          marginBottom: "55px",
        }}
      >
        <img
          src={datas.fotoProfile}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            marginTop: "20px",
          }}
        />
        <div>
          <strong>{datas.name}</strong>
          <br />
          <small>
            {datas.role} • Ditulis pada {waktu}
          </small>
        </div>
      </div>
    </>
  );
}
