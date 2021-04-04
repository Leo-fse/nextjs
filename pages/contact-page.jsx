import { Layout } from "../components/Layout";
import { ContactCard } from "../components/ContactCard";

export default function Contact() {
  return (
    <Layout title="Contact">
      <div className="flex flex-wrap justify-center">
        <ContactCard
          title={"Contact Info"}
          address={"City A"}
          email={"aaaa@gmail.com"}
          phone={"0120-111-222"}
        />
        <ContactCard
          title={"問い合わせ"}
          address={"City B"}
          email={"bbb.gmail.com"}
          phone={"0120-222-333"}
        />
        <ContactCard
          title={"権限申請"}
          address={"City C"}
          email={"ccc.gmail.com"}
          phone={"0120-333-444"}
        />
        <ContactCard
          title={"なんや"}
          address={"City C"}
          email={"ccc.gmail.com"}
          phone={"0120-333-444"}
        />

        <ContactCard
          title={"かんや"}
          address={"City C"}
          email={"ccc.gmail.com"}
          phone={"0120-333-444"}
        />

        <ContactCard
          title={"聞いてね"}
          address={"City C"}
          email={"ccc.gmail.com"}
          phone={"0120-333-444"}
        />
      </div>
    </Layout>
  );
}
