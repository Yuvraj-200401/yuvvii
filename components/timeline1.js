import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Timeline1 = (props) => {
  const [step1, setStep1] = useState(false)
  const [step3, setStep3] = useState(false)
  const [step0, setStep0] = useState(true)
  const [step2, setStep2] = useState(false)
  const [container1, setContainer1] = useState(false)
  const [container2, setContainer2] = useState(false)
  const [container3, setContainer3] = useState(false)
  const [container0, setContainer0] = useState(true)
  return (
    <>
      <div className="thq-section-padding">
        <div className="timeline1-max-width thq-section-max-width">
          <div className="timeline1-timeline">
            <div className="timeline1-progress0"></div>
            <div
              onClick={() => {
                setStep0(true)
                setContainer2(false)
                setContainer1(false)
                setStep1(false)
                setContainer0(true)
                setStep2(false)
                setContainer3(false)
                setStep3(false)
              }}
              className="timeline1-step0"
            >
              <h3 className="thq-heading-3">
                {props.date1 ?? (
                  <Fragment>
                    <span className="timeline1-text38">January 2022</span>
                  </Fragment>
                )}
              </h3>
              <div className="timeline1-container11"></div>
            </div>
            {!step1 && <div className="timeline1-container12"></div>}
            {step1 && <div className="timeline1-container13"></div>}
            {step1 && (
              <div
                onClick={() => {
                  setContainer1(true)
                  setStep1(true)
                  setStep2(false)
                  setContainer3(false)
                  setStep3(false)
                  setContainer2(false)
                  setContainer0(false)
                }}
                className="timeline1-container14"
              >
                <span className="timeline1-text11 thq-body-small">
                  {props.date2 ?? (
                    <Fragment>
                      <span className="timeline1-text50">March 2022</span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container15"></div>
              </div>
            )}
            {!step1 && (
              <div
                onClick={() => {
                  setContainer0(false)
                  setStep3(false)
                  setStep0(true)
                  setStep2(false)
                  setStep1(true)
                  setContainer1(true)
                  setContainer2(false)
                  setContainer3(false)
                }}
                className="timeline1-container16"
              >
                {container0 && (
                  <span className="timeline1-text12 thq-body-small">
                    {props.date2 ?? (
                      <Fragment>
                        <span className="timeline1-text50">March 2022</span>
                      </Fragment>
                    )}
                  </span>
                )}
                <div className="timeline1-container17"></div>
              </div>
            )}
            {!step2 && <div className="timeline1-container18"></div>}
            {step2 && <div className="timeline1-container19"></div>}
            {!step2 && (
              <div
                onClick={() => {
                  setContainer2(true)
                  setStep1(true)
                  setContainer3(false)
                  setContainer0(false)
                  setStep0(true)
                  setStep3(false)
                  setStep2(true)
                  setContainer1(false)
                }}
                className="timeline1-container20"
              >
                <span className="timeline1-text13 thq-body-small">
                  {props.date3 ?? (
                    <Fragment>
                      <span className="timeline1-text45">May 2022</span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container21"></div>
              </div>
            )}
            {step2 && (
              <div
                onClick={() => {
                  setContainer2(true)
                  setContainer3(false)
                  setContainer1(false)
                  setContainer0(false)
                  setStep3(false)
                }}
                className="timeline1-container22"
              >
                <span className="timeline1-text14 thq-body-small">
                  {props.date3 ?? (
                    <Fragment>
                      <span className="timeline1-text45">May 2022</span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container23"></div>
              </div>
            )}
            {!step3 && <div className="timeline1-container24"></div>}
            {step3 && <div className="timeline1-container25"></div>}
            {!step3 && (
              <div
                onClick={() => {
                  setContainer3(true)
                  setContainer2(false)
                  setStep3(true)
                  setContainer1(false)
                  setStep0(true)
                  setStep1(true)
                  setStep2(true)
                  setContainer0(false)
                }}
                className="timeline1-container26"
              >
                <span className="timeline1-text15 thq-body-small">
                  {props.date4 ?? (
                    <Fragment>
                      <span className="timeline1-text49">July 2022</span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container27"></div>
              </div>
            )}
            {step3 && (
              <div className="timeline1-container28">
                <span className="timeline1-text16 thq-body-small">
                  {props.date4 ?? (
                    <Fragment>
                      <span className="timeline1-text49">July 2022</span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container29"></div>
              </div>
            )}
            {!step3 && <div className="timeline1-container30"></div>}
            {step3 && <div className="timeline1-container31"></div>}
          </div>
          {container0 && (
            <div className="timeline1-container32">
              <div className="timeline1-content-container1 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.date1 ?? (
                    <Fragment>
                      <span className="timeline1-text38">January 2022</span>
                    </Fragment>
                  )}
                </h3>
                <h3 className="thq-heading-3">
                  {props.card1Title ?? (
                    <Fragment>
                      <span className="timeline1-text42">
                        Start of Your Hydration Journey
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card1Content ?? (
                    <Fragment>
                      <span className="timeline1-text44">
                        Begin your journey to better hydration with our premium
                        water bottles and hydration essentials.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container33">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card1Action1 ?? (
                        <Fragment>
                          <span className="timeline1-text55">Shop Now</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card1Action2 ?? (
                        <Fragment>
                          <span className="timeline1-text43">Learn More</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
              <img
                alt={props.card1ImageAlt}
                src={props.card1ImageSrc}
                className="timeline1-image1 thq-img-ratio-1-1"
              />
            </div>
          )}
          {container1 && (
            <div className="timeline1-container34">
              <div className="timeline1-content-container2 thq-flex-column">
                <span className="timeline1-text22 thq-body-small">
                  {props.date2 ?? (
                    <Fragment>
                      <span className="timeline1-text50">March 2022</span>
                    </Fragment>
                  )}
                </span>
                <h3 className="thq-heading-3">
                  {props.card2Title ?? (
                    <Fragment>
                      <span className="timeline1-text37">
                        Fitness Milestones Achieved
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card2Content ?? (
                    <Fragment>
                      <span className="timeline1-text46">
                        Stay hydrated during your fitness milestones with our
                        range of high-quality water bottles.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container35">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card2Action1 ?? (
                        <Fragment>
                          <span className="timeline1-text47">Shop Now</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card2Action2 ?? (
                        <Fragment>
                          <span className="timeline1-text56">Explore More</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
              <img
                alt={props.card2ImageAlt}
                src={props.card2ImageSrc}
                className="timeline1-image2 thq-img-ratio-1-1"
              />
            </div>
          )}
          {container2 && (
            <div className="timeline1-container36">
              <div className="timeline1-content-container3 thq-flex-column">
                <span className="timeline1-text27 thq-body-small">
                  {props.date3 ?? (
                    <Fragment>
                      <span className="timeline1-text45">May 2022</span>
                    </Fragment>
                  )}
                </span>
                <h3 className="thq-heading-3">
                  {props.card3Title ?? (
                    <Fragment>
                      <span className="timeline1-text48">
                        Hydration for Active Lifestyles
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card3Content ?? (
                    <Fragment>
                      <span className="timeline1-text54">
                        Embrace an active lifestyle with proper hydration using
                        our stylish and durable water bottles.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container37">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card3Action1 ?? (
                        <Fragment>
                          <span className="timeline1-text52">Shop Now</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card3Action2 ?? (
                        <Fragment>
                          <span className="timeline1-text51">
                            Discover More
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
              <img
                alt={props.card3ImageAlt}
                src={props.card3ImageSrc}
                className="timeline1-image3 thq-img-ratio-1-1"
              />
            </div>
          )}
          {container3 && (
            <div className="timeline1-container38">
              <div className="timeline1-content-container4 thq-flex-column">
                <span className="timeline1-text32 thq-body-small">Date</span>
                <h3 className="thq-heading-3">
                  {props.card4Title ?? (
                    <Fragment>
                      <span className="timeline1-text53">
                        Sustainable Hydration Choices
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.card4Content ?? (
                    <Fragment>
                      <span className="timeline1-text39">
                        Make sustainable choices for hydration with our
                        eco-friendly water bottles and accessories.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container39">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card4Action1 ?? (
                        <Fragment>
                          <span className="timeline1-text41">Shop Now</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card4Action2 ?? (
                        <Fragment>
                          <span className="timeline1-text40">Learn More</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
              <img
                alt={props.card4ImageAlt}
                src={props.card4ImageSrc}
                className="timeline1-image4 thq-img-ratio-1-1"
              />
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .timeline1-max-width {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-timeline {
            width: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
          }
          .timeline1-progress0 {
            flex: 0 0 auto;
            width: 5%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-step0 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-container11 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container12 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container13 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container14 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-text11 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container15 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container16 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-text12 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container17 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container18 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container19 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container20 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-text13 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container21 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container22 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-text14 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container23 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container24 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container25 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container26 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-text15 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container27 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container28 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-text16 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container29 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container30 {
            flex: 0 0 auto;
            width: 5%;
            height: 2px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container31 {
            flex: 0 0 auto;
            width: 5%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container32 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline1-content-container1 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline1-container33 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline1-image1 {
            flex: 1;
            max-width: auto;
          }
          .timeline1-container34 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline1-content-container2 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline1-text22 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container35 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline1-image2 {
            flex: 1;
            max-width: auto;
          }
          .timeline1-container36 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline1-content-container3 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline1-text27 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container37 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline1-image3 {
            flex: 1;
            max-width: auto;
          }
          .timeline1-container38 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline1-content-container4 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline1-text32 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            opacity: 0.35;
          }
          .timeline1-container39 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline1-image4 {
            flex: 1;
            max-width: auto;
          }
          .timeline1-text37 {
            display: inline-block;
          }
          .timeline1-text38 {
            display: inline-block;
          }
          .timeline1-text39 {
            display: inline-block;
          }
          .timeline1-text40 {
            display: inline-block;
          }
          .timeline1-text41 {
            display: inline-block;
          }
          .timeline1-text42 {
            display: inline-block;
          }
          .timeline1-text43 {
            display: inline-block;
          }
          .timeline1-text44 {
            display: inline-block;
          }
          .timeline1-text45 {
            display: inline-block;
          }
          .timeline1-text46 {
            display: inline-block;
          }
          .timeline1-text47 {
            display: inline-block;
          }
          .timeline1-text48 {
            display: inline-block;
          }
          .timeline1-text49 {
            display: inline-block;
          }
          .timeline1-text50 {
            display: inline-block;
          }
          .timeline1-text51 {
            display: inline-block;
          }
          .timeline1-text52 {
            display: inline-block;
          }
          .timeline1-text53 {
            display: inline-block;
          }
          .timeline1-text54 {
            display: inline-block;
          }
          .timeline1-text55 {
            display: inline-block;
          }
          .timeline1-text56 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .timeline1-container32 {
              flex-direction: column;
            }
            .timeline1-container34 {
              flex-direction: column;
            }
            .timeline1-container36 {
              flex-direction: column;
            }
            .timeline1-container38 {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .timeline1-max-width {
              gap: 0;
            }
            .timeline1-container32 {
              gap: var(--dl-space-space-twounits);
            }
            .timeline1-container34 {
              gap: var(--dl-space-space-twounits);
            }
            .timeline1-container36 {
              gap: var(--dl-space-space-twounits);
            }
            .timeline1-container38 {
              gap: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .timeline1-progress0 {
              display: none;
            }
            .timeline1-container30 {
              display: none;
            }
            .timeline1-container31 {
              display: none;
            }
            .timeline1-container32 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline1-container33 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline1-container34 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline1-container36 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline1-container38 {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Timeline1.defaultProps = {
  card2Title: undefined,
  card4ImageAlt: 'Image highlighting sustainability',
  card2ImageAlt: 'Image showing fitness achievements',
  date1: undefined,
  card4Content: undefined,
  card1ImageSrc:
    'https://images.unsplash.com/photo-1517438984742-1262db08379e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODQxNDM0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  card4Action2: undefined,
  card4Action1: undefined,
  card1ImageAlt: 'Image depicting the start of a journey',
  card4ImageSrc:
    'https://images.unsplash.com/photo-1553207451-7474cc209761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODQxNDM0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  card2ImageSrc:
    'https://images.unsplash.com/photo-1594078807666-6af57bc52363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODQxNDM0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  card1Title: undefined,
  card1Action2: undefined,
  card1Content: undefined,
  date3: undefined,
  card2Content: undefined,
  card2Action1: undefined,
  card3ImageAlt: 'Image showcasing an active lifestyle',
  card3Title: undefined,
  date4: undefined,
  date2: undefined,
  card3Action2: undefined,
  card3Action1: undefined,
  card3ImageSrc:
    'https://images.unsplash.com/photo-1571215682850-ae44fd0479a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODQxNDM0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  card4Title: undefined,
  card3Content: undefined,
  card1Action1: undefined,
  card2Action2: undefined,
}

Timeline1.propTypes = {
  card2Title: PropTypes.element,
  card4ImageAlt: PropTypes.string,
  card2ImageAlt: PropTypes.string,
  date1: PropTypes.element,
  card4Content: PropTypes.element,
  card1ImageSrc: PropTypes.string,
  card4Action2: PropTypes.element,
  card4Action1: PropTypes.element,
  card1ImageAlt: PropTypes.string,
  card4ImageSrc: PropTypes.string,
  card2ImageSrc: PropTypes.string,
  card1Title: PropTypes.element,
  card1Action2: PropTypes.element,
  card1Content: PropTypes.element,
  date3: PropTypes.element,
  card2Content: PropTypes.element,
  card2Action1: PropTypes.element,
  card3ImageAlt: PropTypes.string,
  card3Title: PropTypes.element,
  date4: PropTypes.element,
  date2: PropTypes.element,
  card3Action2: PropTypes.element,
  card3Action1: PropTypes.element,
  card3ImageSrc: PropTypes.string,
  card4Title: PropTypes.element,
  card3Content: PropTypes.element,
  card1Action1: PropTypes.element,
  card2Action2: PropTypes.element,
}

export default Timeline1
