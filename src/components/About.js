import React from "react";

export default function About(props) {
  return (
    <div className="container">
      <h2
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        About Us
      </h2>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is TypeOut?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae eum, nam aperiam et obcaecati ipsa! Unde explicabo
              ullam neque hic autem, obcaecati voluptatum suscipit quas fuga,
              maxime sunt repudiandae laboriosam.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free To Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              explicabo minima ducimus nihil earum ad amet eligendi numquam sed
              dolor.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              License
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              ipsum magni nihil unde laboriosam. Officia, error non. Nemo
              possimus, dolores impedit eius laboriosam debitis error ratione
              deserunt a nisi consequuntur sint quis dolor quasi ea, hic commodi
              ex perspiciatis doloribus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
