import { injectGlobal } from "emotion";

const modalAnimationOffset = "50px";
const modalAnimationDuration = "0.3s";
const modalAnimationEasing = "ease";

export const injectModalCss = () => injectGlobal`
    .modal-wrapper {
        position: fixed;
        z-index: 1000;
    }

    .modal {
        left: 50%;
        position: fixed;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: auto;
    }

    .modal-body-wrapper {
        flex: 1 1 auto;
        min-height: 0;
        position: relative;

        .container-scrollable {
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
        }
    }

    .modal-backdrop {
        height: 100%;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: auto;
    }

    .modal-enter,
    .modal-appear {

        .modal {
            opacity: 0;
            transform: translate(-50%, calc(-50% ~' - ' ${modalAnimationOffset}));
        }

        .modal-backdrop {
            opacity: 0;
        }

        &.modal-enter-active,
        &.modal-appear-active {

            .modal {
                opacity: 1;
                transform: translate(-50%, -50%);
                transition: transform ${modalAnimationDuration} ${modalAnimationEasing}, opacity ${modalAnimationDuration} ${modalAnimationEasing};
            }

            .modal-backdrop {
                opacity: 1;
                transition: opacity ${modalAnimationDuration} ${modalAnimationEasing};
            }
        }
    }

    .modal-exit {

        .modal {
            opacity: 1;
            transform: translate(-50%, -50%);
        }

        .modal-backdrop {
            opacity: 1;
        }

        &.modal-exit-active {

            .modal {
                opacity: 0;
                transform: translate(-50%, calc(-50% ~' - ' ${modalAnimationOffset}));
                transition: transform ${modalAnimationDuration} ${modalAnimationEasing}, opacity ${modalAnimationDuration} ${modalAnimationEasing};
            }

            .modal-backdrop {
                opacity: 0;
                transition: opacity ${modalAnimationDuration} ${modalAnimationEasing};
            }
        }
    }
`;
