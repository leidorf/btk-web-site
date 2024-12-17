import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import PageHead from "./components/layout/PageHead";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Input from "./components/ui/Input";


const components = () => {
  return (
    <>
    <PageHead headTitle='BTK | componentler'/>
    <Header/>
      <div className="text-center">
        <div>
          <Button variant="disabled">Test Butonu</Button>
        </div>

        <div>
          <Button
            size="sm"
            variant="primary"
          >
            primary sm
          </Button>
        </div>
        <div>
          <Button
            size="md"
            variant="primary"
          >
            primary md(base)
          </Button>
        </div>
        <div>
          <Button
            size="lg"
            variant="primary"
          >
            primary lg
          </Button>
        </div>
        <div>
          <Button variant="primary">primary</Button>
        </div>
        <Button
          variant="primary"
          href="/"
        >
          Home Button
        </Button>
        <div>
          <Button variant="secondary">secondary</Button>
        </div>
        <div>
          <Card>
            <p>
              Bilim ve Teknoloji Kulübü 2018'de kurulmuştur.
            </p>
          </Card>
        </div>
        <div>
          <Card>
            <Button>inner component</Button>
          </Card>
        </div>
        <div>
          <Input></Input>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default components;
