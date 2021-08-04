import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ImageScroller from "./components/Imagescroller";

function App() {
  return (
    <div className="App">
      <Header />

      {/* <ImageScroller /> */}

      <div>
        <h1>For your memorable moments</h1>
        <br />
        <p>
          <b>당신의 소중한 순간을 더욱 특별하게</b>
        </p>
        당신의 소중한 기념일을 더욱 특별하게 해줄
        <br />
        오리지널비어컴퍼니의 커스텀 수제 맥주를 만나보세요.
        <br />
        내 취향에 맞는 맥주 레시피와 나만의 스토리를 담은 라벨까지,
        <br />
        세상에 단 하나뿐인 맥주로 잊지 못할 추억을 선사해드립니다.
        <br />
        <p>
          <b>나만의 취향을 가득 담은 맥주</b>
        </p>
        오리지널비어컴퍼니만의 제조 노하우를 활용해
        <br />
        당신의 섬세한 취향에 맞춘 맥주 레시피를 제안해드립니다.
        <br />
        <p>
          <b>특별하고도 품격있는 디자인</b>
        </p>
        나만의 스토리를 담은 맥주 네이밍부터 라벨 디자인까지
        <br />
        나만의 스페셜 에디션 수제맥주 제작이 가능합니다.
        <br />
        <p>
          <b>세상에 단 하나뿐인 나만의 특별한 수제 맥주를 만나보세요.</b>
        </p>
        <button>Customize</button>
      </div>

      <div style={{ backgroundColor: "lightgrey" }}>
        <h1>Original Beer Company.</h1>
        <p>
          <b>“차별화된 맥주 문화와 경험을 통해 행복을 전달합니다."</b>
        </p>
        오리지널비어컴퍼니는 맥주를 사랑하는 양조사의 마음으로 만든 국내 프리미엄 수제맥주 브랜드입니다.
        <br />
        우리는 좋은 맥주를 마시는 것을 넘어 차별화된 맥주 경험과 문화를 제안하고자 합니다.
        <br />
        당신의 특별한 순간이 우리의 맥주로 더욱 빛나길 바라며, 당신에게 또 다른 행복을 전달할 수 있기를 바랍니다.
        <br />
        <p>
          <b>완벽함의 추구</b>
        </p>
        우리는 장인정신에 기반한 완벽함을
        <br />
        추구합니다. 전통 양조 기술과 재료가 가지는
        <br />
        본질적 가치에 집중하며, 스스로 인정할 수 있는
        <br />
        최상의 물리티를 위해 노력합니다.
        <br />
        <p>
          <b>탁월함의 경험</b>
        </p>
        우리의 맥주를 경험하는 모든 순간에
        <br />
        탁월함을 느낄 수 있기를 바랍니다.
        <br />
        코르크 마개를 개봉하는 순간부터 맥주 본연의 깊은 맛과 풍미를 음미하기까지
        <br /> 모든 순간에 세심한 손길을 더했습니다
        <br />
        <p>
          <b>특별한 순간의 기록</b>
        </p>
        당신의 특별한 순간을 기념할 때
        <br />
        우리의 맥주와 함께 더 큰 행복을 느끼시기를
        <br />
        바랍니다. 우리의 맥주는 기념하고 싶은
        <br />
        당신의 특별한 순간을 더욱 선명하고
        <br />
        빛나게 기획해드릴 것입니다.
        <br />
      </div>

      <Footer />
    </div>
  );
}

export default App;
